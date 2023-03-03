import { moveNorth, moveSouth, moveEast, moveWest } from "./movement"

describe("test moveNorth function", () => {
	it("should move when plateau allows", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 2, y: 4 }
		const expected = { x: 2, y: 5 }

		expect(moveNorth(position, plateau)).toStrictEqual(expected)
	})
	it("should not move when plateau limits", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 2, y: 6 }
		const expected = { x: 2, y: 6 }

		expect(moveNorth(position, plateau)).toStrictEqual(expected)
	})
})

describe("test moveSouth function", () => {
	it("should move one when plateau allows", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 2, y: 4 }
		const expected = { x: 2, y: 3 }

		expect(moveSouth(position, plateau)).toStrictEqual(expected)
	})
	it("should not move when plateau limits", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 0, y: 0 }
		const expected = { x: 0, y: 0 }

		expect(moveSouth(position, plateau)).toStrictEqual(expected)
	})
})

describe("test moveWest function", () => {
	it("should move one when plateau allows", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 1, y: 4 }
		const expected = { x: 0, y: 4 }

		expect(moveWest(position, plateau)).toStrictEqual(expected)
	})
	it("should not move when plateau limits", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 0, y: 4 }
		const expected = { x: 0, y: 4 }

		expect(moveWest(position, plateau)).toStrictEqual(expected)
	})
})

describe("test moveEast function", () => {
	it("should move one when plateau allows", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 4, y: 4 }
		const expected = { x: 5, y: 4 }

		expect(moveEast(position, plateau)).toStrictEqual(expected)
	})
	it("should not move when plateau limits", () => {
		const plateau = { min: { x: 0, y: 0 }, max: { x: 3, y: 6 } }
		const position = { x: 3, y: 5 }
		const expected = { x: 3, y: 5 }

		expect(moveEast(position, plateau)).toStrictEqual(expected)
	})
})
