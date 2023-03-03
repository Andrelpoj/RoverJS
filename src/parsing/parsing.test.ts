import { parsePlateau } from "./parsing"
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
