import { argv } from "node:process"
import readline from "node:readline"
import fs from "node:fs"

import path from "node:path"

const move = (plateau, position) => {
	const [limitX, limitY] = plateau
	const [x, y, direction] = position

	let newX, newY
	switch (direction) {
		case "N":
			newY = y + 1 <= limitY ? y + 1 : limitY
			return [x, newY]
		case "S":
			newY = y - 1 >= 0 ? y - 1 : 0
			return [x, newY]
		case "W":
			newX = x - 1 >= 0 ? x - 1 : 0
			return [newX, y]
		case "E":
			newX = x + 1 <= limitX ? x + 1 : limitX
			return [newX, y]
	}
}

const rotate = (current, rotate) => {
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

const process = (plateau, position, instructions) => {
	let [x, y, direction] = position

	instructions.split("").forEach(instruction => {
		if (instruction === "M") {
			const result = move(plateau, [x, y, direction])
			x = result[0]
			y = result[1]
		}

		if (["L", "R"].indexOf(instruction) !== -1) {
			direction = rotate(direction, instruction)
		}
		//TODO: Other cases should throw error
	})

	console.log(`${x} ${y} ${direction}`)
}

const readInterface = readline.createInterface({
	input: fs.createReadStream(path.join("./", argv[2])),
})

let currentLine = -1
let plateau = ""
let position = ""
let instructions = ""
readInterface.on("line", function (line) {
	++currentLine

	//TODO: Add validations for plateau, position and instructions lines
	if (currentLine === 0) {
		const raw = line.split(" ")
		plateau = [+raw[0], +raw[1]]
		return
	}

	const isPosition = currentLine % 2 === 1
	if (isPosition) {
		const raw = line.split(" ")
		position = [+raw[0], +raw[1], raw[2]]
		return
	}

	instructions = line
	process(plateau, position, instructions)
})
