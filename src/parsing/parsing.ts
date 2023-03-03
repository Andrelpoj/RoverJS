import * as movement from "../movement/movement"
import * as rotation from "../rotation/rotation"
import * as interpretation from "../interpretation/interpretation"

const isNonNegativeInteger = (input: Number): Boolean => {
	return Number.isInteger(input) && input >= 0
}

export type parsePlateauResult =
	| { status: "success"; result: movement.Plateau }
	| { status: "error"; error: Error }

export const parsePlateau = (line: string): parsePlateauResult => {
	const raw = line.split(" ")
	if (raw.length !== 2) {
		return {
			status: "error",
			error: Error("invalid number of parameters at plateau definition"),
		}
	}

	const x = +raw[0]
	const y = +raw[1]

	if (!isNonNegativeInteger(x) || !isNonNegativeInteger(y)) {
		return {
			status: "error",
			error: Error(
				`invalid value at plateau definition: ${raw} (must be NonNegativeInteger)`
			),
		}
	}

	const max = { x, y }
	const min = { x: 0, y: 0 }

	return { status: "success", result: { min, max } }
}

export type parsePositionAndDirectionResult =
	| {
			status: "success"
			position: movement.Position
			direction: rotation.Direction
	  }
	| { status: "error"; error: Error }

export const parsePositionAndDirection = (
	line: string
): parsePositionAndDirectionResult => {
	const raw = line.split(" ")

	const x = +raw[0]
	const y = +raw[1]

	if (!isNonNegativeInteger(x) || !isNonNegativeInteger(y)) {
		return {
			status: "error",
			error: Error(
				"invalid value at position definition: must be NonNegativeInteger"
			),
		}
	}

	if (rotation.DirectionNames.find(v => v === raw[2]) === undefined) {
		return {
			status: "error",
			error: Error(
				"invalid value at direction definition: must be one of these: N | S | W | E"
			),
		}
	}
	const direction = raw[2] as rotation.Direction

	return { status: "success", position: { x, y }, direction }
}

const isInvalidInstruction = (v: string) =>
	interpretation.InstructionNames.every(k => k != v)

const hasInvalidInstruction = (instructions: string[]): Boolean =>
	instructions.find(instruction => isInvalidInstruction(instruction)) !==
	undefined

export type parseInstructionsResult =
	| {
			status: "success"
			result: interpretation.Instruction[]
	  }
	| { status: "error"; error: Error }

export const parseInstructions = (line: string): parseInstructionsResult => {
	const instructions = line.split("")

	if (hasInvalidInstruction(instructions)) {
		return {
			status: "error",
			error: Error(
				`invalid instruction. must be one of these: M | L | R`
			),
		}
	}

	return {
		status: "success",
		result: instructions.map(v => v as interpretation.Instruction),
	}
}
