export type Direction = "N" | "E" | "S" | "W"

const directionsOrder: Direction[] = ["N", "E", "S", "W"]

export const rotateLeft = (current: Direction): Direction => {
	const currentIndex = directionsOrder.indexOf(current)
	const newIndex =
		currentIndex - 1 >= 0 ? currentIndex - 1 : directionsOrder.length - 1
	return directionsOrder[newIndex]
}

export const rotateRight = (current: Direction): Direction => {
	const currentIndex = directionsOrder.indexOf(current)
	const newIndex =
		currentIndex + 1 < directionsOrder.length ? currentIndex + 1 : 0
	return directionsOrder[newIndex]
}
