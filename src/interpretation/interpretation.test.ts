import { execute, Instruction } from "./interpretation"

describe("test interpretation.execute function", () => {
	it("should execute normally when parameters are valid", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 5, y: 5 } }
		const position = { x: 1, y: 2 }
		const direction = "N"
		const instructions: Instruction[] = [
			"L",
			"M",
			"L",
			"M",
			"L",
			"M",
			"L",
			"M",
			"M",
		]

		const logSpy = jest
			.spyOn(global.console, "log")
			.mockImplementation(() => {})

		execute(plateau, position, direction, instructions)

		expect(logSpy.mock.calls).toContainEqual(["1 3 N"])

		logSpy.mockRestore()
	})

	it("should log error when position is invalid for plateau", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 5, y: 5 } }
		const position = { x: 2, y: 6 }
		const direction = "N"
		const instructions: Instruction[] = ["L", "M"]

		const logSpy = jest
			.spyOn(global.console, "log")
			.mockImplementation(() => {})

		execute(plateau, position, direction, instructions)

		expect(logSpy.mock.calls).toContainEqual([
			"Error executing instructions: ",
			Error("invalid position for plateau"),
		])

		logSpy.mockRestore()
	})
})
