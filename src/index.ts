import { argv } from "node:process"
import readline from "node:readline"
import fs from "node:fs"
import path from "node:path"

import * as interpretation from "./interpretation/interpretation"
import * as movement from "./movement/movement"
import * as rotation from "./rotation/rotation"
import * as parsing from "./parsing/parsing"

let plateau: movement.Plateau
let position: movement.Position
let direction: rotation.Direction
let instructions: interpretation.Instruction[]

const readInterface = readline.createInterface({
	input: fs.createReadStream(path.join("./", argv[2])),
})

let currentLine = -1
readInterface.on("line", function (line) {
	++currentLine

	if (currentLine === 0) {
		const result = parsing.parsePlateau(line)
		if (result.status === "error") {
			console.log(`Parsing error: ${result.error}`)
			return
		}

		plateau = result.result
		return
	}

	const isPosition = currentLine % 2 === 1
	if (isPosition) {
		const result = parsing.parsePositionAndDirection(line)
		if (result.status === "error") {
			console.log(`Parsing error: ${result.error}`)
			return
		}

		position = result.position
		direction = result.direction
		return
	}

	const result = parsing.parseInstructions(line)
	if (result.status === "error") {
		console.log(`Parsing error: ${result.error}`)
		return
	}

	instructions = result.result

	interpretation.execute(plateau, position, direction, instructions)
})
