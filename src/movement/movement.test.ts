import { moveNorth, moveSouth, moveEast, moveWest } from "./movement"

describe("test moveNorth function", () => {
	it("should move when plateau allows", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 2, y: 4 }
		const expected = { x: 2, y: 5 }

		const moveResult = moveNorth(position, plateau)

		expect(moveResult.status).toBe("success")
		moveResult.status === "success" &&
			expect(moveResult.result).toStrictEqual(expected)
	})
	it("should not move when plateau limits", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 2, y: 6 }
		const expected = { x: 2, y: 6 }

		const moveResult = moveNorth(position, plateau)

		expect(moveResult.status).toBe("success")
		moveResult.status === "success" &&
			expect(moveResult.result).toStrictEqual(expected)
	})
	it("should return error when invalid position for plateau", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 4, y: 6 }
		const expected = Error("invalid position for plateau")

		const moveResult = moveNorth(position, plateau)

		expect(moveResult.status).toBe("error")
		moveResult.status === "error" &&
			expect(moveResult.error).toStrictEqual(expected)
	})
})

describe("test moveSouth function", () => {
	it("should move one when plateau allows", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 2, y: 4 }
		const expected = { x: 2, y: 3 }

		const moveResult = moveSouth(position, plateau)

		expect(moveResult.status).toBe("success")
		moveResult.status === "success" &&
			expect(moveResult.result).toStrictEqual(expected)
	})
	it("should not move when plateau limits", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 0, y: 0 }
		const expected = { x: 0, y: 0 }

		const moveResult = moveSouth(position, plateau)

		expect(moveResult.status).toBe("success")
		moveResult.status === "success" &&
			expect(moveResult.result).toStrictEqual(expected)
	})
	it("should return error when invalid position for plateau", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 4, y: 6 }
		const expected = Error("invalid position for plateau")

		const moveResult = moveSouth(position, plateau)

		expect(moveResult.status).toBe("error")
		moveResult.status === "error" &&
			expect(moveResult.error).toStrictEqual(expected)
	})
})

describe("test moveWest function", () => {
	it("should move one when plateau allows", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 1, y: 4 }
		const expected = { x: 0, y: 4 }

		const moveResult = moveWest(position, plateau)

		expect(moveResult.status).toBe("success")
		moveResult.status === "success" &&
			expect(moveResult.result).toStrictEqual(expected)
	})
	it("should not move when plateau limits", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 0, y: 4 }
		const expected = { x: 0, y: 4 }

		const moveResult = moveWest(position, plateau)

		expect(moveResult.status).toBe("success")
		moveResult.status === "success" &&
			expect(moveResult.result).toStrictEqual(expected)
	})
	it("should return error when invalid position for plateau", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 4, y: 6 }
		const expected = Error("invalid position for plateau")

		const moveResult = moveWest(position, plateau)

		expect(moveResult.status).toBe("error")
		moveResult.status === "error" &&
			expect(moveResult.error).toStrictEqual(expected)
	})
})

describe("test moveEast function", () => {
	it("should move one when plateau allows", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 2, y: 4 }
		const expected = { x: 3, y: 4 }

		const moveResult = moveEast(position, plateau)

		expect(moveResult.status).toBe("success")
		moveResult.status === "success" &&
			expect(moveResult.result).toStrictEqual(expected)
	})
	it("should not move when plateau limits", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 3, y: 5 }
		const expected = { x: 3, y: 5 }

		const moveResult = moveEast(position, plateau)

		expect(moveResult.status).toBe("success")
		moveResult.status === "success" &&
			expect(moveResult.result).toStrictEqual(expected)
	})
	it("should return error when invalid position for plateau", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 4, y: 6 }
		const expected = Error("invalid position for plateau")

		const moveResult = moveEast(position, plateau)

		expect(moveResult.status).toBe("error")
		moveResult.status === "error" &&
			expect(moveResult.error).toStrictEqual(expected)
	})
})
