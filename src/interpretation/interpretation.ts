export type Instruction = Move | Rotation
export type Rotation = "L" | "R"
export type Move = "M"

import * as movement from "../movement/movement"
import * as rotation from "../rotation/rotation"

const move = (
	position: movement.Position,
	direction: rotation.Direction,
	plateau: movement.Plateau
): movement.MoveResult => {
	switch (direction) {
		case "N":
			return movement.moveNorth(position, plateau)
		case "S":
			return movement.moveSouth(position, plateau)
		case "W":
			return movement.moveWest(position, plateau)
		case "E":
			return movement.moveEast(position, plateau)
	}
}

const rotate = (current: rotation.Direction, rotate: Rotation) => {
	if (rotate === "L") return rotation.rotateLeft(current)
	return rotation.rotateRight(current)
}

export const execute = (
	plateau: movement.Plateau,
	position: movement.Position,
	direction: rotation.Direction,
	instructions: Instruction[]
) => {
	for (let instruction of instructions) {
		if (["M", "L", "R"].indexOf(instruction) === -1) {
			console.log(
				`Error executing instructions: invalid instruction value: ${instruction}`
			)
			return
		}

		if (instruction === "M") {
			const moveResult = move(position, direction, plateau)
			if (moveResult.status === "error") {
				console.log("Error executing instructions: ", moveResult.error)
				return
			}

			position = moveResult.result
		}

		if (["L", "R"].indexOf(instruction) !== -1) {
			direction = rotate(direction, instruction as Rotation)
		}
	}

	console.log(`${position.x} ${position.y} ${direction}`)
}
