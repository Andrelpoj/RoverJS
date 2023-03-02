export type Instruction = Move | Rotation
export type Rotation = "L" | "R"
export type Move = "M"

import * as movement from "./movement"
import * as rotation from "./rotation"

const move = (
	plateau: movement.Plateau,
	position: movement.Position,
	direction: rotation.Direction
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

const rotate = (current: rotation.Direction, rotate: Rotation) => {
	if (rotate === "L") return rotation.RotateLeft(current)
	return rotation.RotateRight(current)
}

export const execute = (
	plateau: movement.Plateau,
	position: movement.Position,
	direction: rotation.Direction,
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
