import { argv } from "node:process"

let x = +argv[2]
let y = +argv[3]
let direction = argv[4]
const instructions = Array(argv[5])

//TODO: Consider plateau size as finite

const move = (x, y, direction) => {
	switch (direction) {
		case "N":
			return [x, y + 1]
		case "S":
			return [x, y - 1]
		case "W":
			return [x - 1, y]
		case "E":
			return [x + 1, y]
	}
}

const rotate = (current, rotate) => {
	switch (direction) {
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

instructions.forEach(instruction => {
	if (instruction === "M") {
		const result = move(x, y, direction)
		x = result[0]
		y = result[1]
	}

	if (["L", "R"].indexOf(instruction) !== -1) {
		direction = rotate(direction, instruction)
	}

	//TODO: Other cases should throw error
})

console.log(`${x} ${y} ${direction}`)
