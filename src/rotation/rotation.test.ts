import { rotateLeft, rotateRight } from "./rotation"

describe("test rotateLeft function", () => {
	it("should rotate from N to W", () => {
		expect(rotateLeft("N")).toBe("W")
	})
	it("should rotate from E to N", () => {
		expect(rotateLeft("E")).toBe("N")
	})
	it("should rotate from S to E", () => {
		expect(rotateLeft("S")).toBe("E")
	})
	it("should rotate from W to S", () => {
		expect(rotateLeft("W")).toBe("S")
	})
})

describe("test rotateRight function", () => {
	it("should rotate from N to E", () => {
		expect(rotateRight("N")).toBe("E")
	})
	it("should rotate from E to S", () => {
		expect(rotateRight("E")).toBe("S")
	})
	it("should rotate from S to W", () => {
		expect(rotateRight("S")).toBe("W")
	})
	it("should rotate from W to N", () => {
		expect(rotateRight("W")).toBe("N")
	})
})
