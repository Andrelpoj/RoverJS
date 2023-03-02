export type Direction = "N" | "S" | "W" | "E"

export type Rotation = "L" | "R"

export type Move = "M"

export type Instruction = Move | Rotation

import * as movement from "./movement"

const move = (
	plateau: movement.Plateau,
	position: movement.Position,
	direction: Direction
): movement.Position => {
	switch (direction) {
		case "N":
			return movement.MoveNorth(plateau, position)
		case "S":
			return movement.MoveSouth(plateau, position)
		case "W":
			return movement.MoveWest(plateau, position)
		case "E":
			return movement.MoveEast(plateau, position)
	}
}

const rotate = (current: Direction, rotate: Rotation) => {
	switch (current) {
		case "N":
			if (rotate === "L") return "W"
			return "E"
		case "S":
			if (rotate === "L") return "E"
			return "W"
		case "W":
			if (rotate === "L") return "S"
			return "N"
		case "E":
			if (rotate === "L") return "N"
			return "S"
	}
}

export const execute = (
	plateau: movement.Plateau,
	position: movement.Position,
	direction: Direction,
	instructions: Instruction[]
) => {
	instructions.forEach(instruction => {
		if (instruction === "M") {
			position = move(plateau, position, direction)
		}

		if (["L", "R"].indexOf(instruction) !== -1) {
			direction = rotate(direction, instruction as Rotation)
		}
		//TODO: Other cases should throw error
	})

	console.log(`${position.x} ${position.y} ${direction}`)
}
