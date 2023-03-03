import { argv } from "node:process"
import readline from "node:readline"
import fs from "node:fs"
import path from "node:path"

import * as interpretation from "./interpretation"
import * as movement from "./movement/movement"
import * as rotation from "./rotation/rotation"

const readInterface = readline.createInterface({
	input: fs.createReadStream(path.join("./", argv[2])),
})

let currentLine = -1

let plateau: movement.Plateau
let position: movement.Position
let direction: rotation.Direction
let instructions: interpretation.Instruction[]

readInterface.on("line", function (line) {
	++currentLine

	//TODO: Add validations for plateau, position and instructions lines
	if (currentLine === 0) {
		const raw = line.split(" ")
		const max = { x: +raw[0], y: +raw[1] }
		const min = { x: 0, y: 0 }
		plateau = { min, max }
		return
	}

	const isPosition = currentLine % 2 === 1
	if (isPosition) {
		const raw = line.split(" ")
		position = { x: +raw[0], y: +raw[1] }
		direction = raw[2] as rotation.Direction
		return
	}

	instructions = line.split("").map(v => v as interpretation.Instruction)
	interpretation.execute(plateau, position, direction, instructions)
})
