import { argv } from "node:process"
import readline from "node:readline"
import fs from "node:fs"
import path from "node:path"

import { execute } from "./process.js"

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
	execute(plateau, position, instructions)
})
