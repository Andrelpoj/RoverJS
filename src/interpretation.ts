export type Instruction = Move | Rotation
export type Rotation = "L" | "R"
export type Move = "M"

import * as movement from "./movement"
import * as rotation from "./rotation"

const move = (
	position: movement.Position,
	direction: rotation.Direction,
	plateau: movement.Plateau
): movement.Position => {
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
			position = move(position, direction, plateau)
		}

		if (["L", "R"].indexOf(instruction) !== -1) {
			direction = rotate(direction, instruction as Rotation)
		}
		//TODO: Other cases should throw error
	})

	console.log(`${position.x} ${position.y} ${direction}`)
}
