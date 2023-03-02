import { Direction } from "./process"
export type Direction = "N" | "S" | "W" | "E"

export type Rotation = "L" | "R"

export type Move = "M"

export type Position = {
	x: number
	y: number
}

export type Plateau = {
	x: number
	y: number
}

export type Instruction = Move | Rotation

const move = (
	plateau: Plateau,
	position: Position,
	direction: Direction
): Position => {
	let newX: number, newY: number
	switch (direction) {
		case "N":
			newY = position.y + 1 <= plateau.y ? position.y + 1 : plateau.y
			return { x: position.x, y: newY }
		case "S":
			newY = position.y - 1 >= 0 ? position.y - 1 : 0
			return { x: position.x, y: newY }
		case "W":
			newX = position.x - 1 >= 0 ? position.x - 1 : 0
			return { x: newX, y: position.y }
		case "E":
			newX = position.x + 1 <= plateau.x ? position.x + 1 : plateau.x
			return { x: newX, y: position.y }
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
	plateau: Plateau,
	position: Position,
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
