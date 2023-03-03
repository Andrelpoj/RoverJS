export type Position = {
	x: number
	y: number
}

export const MoveNorth = (plateau: Position, position: Position) => {
	const newY = position.y + 1 <= plateau.y ? position.y + 1 : plateau.y
	return { x: position.x, y: newY }
}
export const MoveSouth = (plateau: Position, position: Position) => {
	const newY = position.y - 1 >= 0 ? position.y - 1 : 0
	return { x: position.x, y: newY }
}
export const MoveWest = (plateau: Position, position: Position) => {
	const newX = position.x - 1 >= 0 ? position.x - 1 : 0
	return { x: newX, y: position.y }
}
export const MoveEast = (plateau: Position, position: Position) => {
	const newX = position.x + 1 <= plateau.x ? position.x + 1 : plateau.x
	return { x: newX, y: position.y }
}
