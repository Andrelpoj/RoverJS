import {
	parsePlateau,
	parsePositionAndDirection,
	parseInstructions,
} from "./parsing"
describe("test parsePlateau function", () => {
	it("should return error when line has wrong number of parameters", () => {
		const result = parsePlateau("1 1 1")

		expect(result.status).toBe("error")
		result.status === "error" &&
			expect(result.error).toStrictEqual(
				Error("invalid number of parameters at plateau definition")
			)
	})
	it("should return error when line has negative number", () => {
		const result = parsePlateau("1 -2")

		expect(result.status).toBe("error")
		result.status === "error" &&
			expect(result.error).toStrictEqual(
				Error(
					`invalid value at plateau definition: 1,-2 (must be NonNegativeInteger)`
				)
			)
	})
	it("should return error when line has float number", () => {
		const result = parsePlateau("2.3 1")

		expect(result.status).toBe("error")
		result.status === "error" &&
			expect(result.error).toStrictEqual(
				Error(
					`invalid value at plateau definition: 2.3,1 (must be NonNegativeInteger)`
				)
			)
	})
	it("should return success", () => {
		const result = parsePlateau("2 1")

		expect(result.status).toBe("success")
		result.status === "success" &&
			expect(result.result).toStrictEqual({
				max: { x: 2, y: 1 },
				min: { x: 0, y: 0 },
			})
	})
})

describe("test parsePositionAndDirection function", () => {
	it("should return error when line has negative number", () => {
		const result = parsePositionAndDirection("1 -2 N")

		expect(result.status).toBe("error")
		result.status === "error" &&
			expect(result.error).toStrictEqual(
				Error(
					`invalid value at position definition: (must be NonNegativeInteger)`
				)
			)
	})
	it("should return error when line has float number", () => {
		const result = parsePositionAndDirection("2.3 1")

		expect(result.status).toBe("error")
		result.status === "error" &&
			expect(result.error).toStrictEqual(
				Error(
					`invalid value at position definition: (must be NonNegativeInteger)`
				)
			)
	})
	it("should return error when has invalid direction", () => {
		const result = parsePositionAndDirection("2 1 K")

		expect(result.status).toBe("error")

		if (result.status === "error") {
			expect(result.error).toStrictEqual(
				Error(
					"invalid value at direction definition: must be one of these: N | S | W | E"
				)
			)
		}
	})
	it("should return success", () => {
		const result = parsePositionAndDirection("2 1 N")

		expect(result.status).toBe("success")

		if (result.status === "success") {
			expect(result.position).toStrictEqual({ x: 2, y: 1 })
			expect(result.direction).toStrictEqual("N")
		}
	})
})

describe("test parseInstructions function", () => {
	it("should return error when has invalid instruction", () => {
		const result = parseInstructions("LLLRRRMMMK")

		expect(result.status).toBe("error")
		result.status === "error" &&
			expect(result.error).toStrictEqual(
				Error(`invalid instruction. must be one of these: M | L | R`)
			)
	})

	it("should return success", () => {
		const result = parseInstructions("LLLRRRMMM")

		expect(result.status).toBe("success")
		result.status === "success" &&
			expect(result.result).toStrictEqual([
				"L",
				"L",
				"L",
				"R",
				"R",
				"R",
				"M",
				"M",
				"M",
			])
	})
})
