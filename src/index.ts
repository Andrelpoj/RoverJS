import { argv } from "node:process"
import readline from "node:readline"
import fs from "node:fs"
import path from "node:path"

import * as process from "./process"

const readInterface = readline.createInterface({
	input: fs.createReadStream(path.join("./", argv[2])),
})

let currentLine = -1

let plateau: process.Plateau
let position: process.Position
let instructions: process.Instruction[]

readInterface.on("line", function (line) {
	++currentLine

	//TODO: Add validations for plateau, position and instructions lines
	if (currentLine === 0) {
		const raw = line.split(" ")
		plateau = { x: +raw[0], y: +raw[1] }
		return
	}

	const isPosition = currentLine % 2 === 1
	if (isPosition) {
		const raw = line.split(" ")
		position = {
			x: +raw[0],
			y: +raw[1],
			direction: raw[2] as process.Direction,
		}
		return
	}

	instructions = line.split("").map(v => v as process.Instruction)
	process.execute(plateau, position, instructions)
})
