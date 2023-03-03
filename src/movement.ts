export type Position = {
	x: number
	y: number
}

export type Plateau = {
	min: Position
	max: Position
}

export const moveNorth = (position: Position, plateau: Plateau) => {
	const newY = position.y < plateau.max.y ? position.y + 1 : plateau.max.y
	return { x: position.x, y: newY }
}

export const moveSouth = (position: Position, plateau: Plateau) => {
	console.log(position.y)
	console.log(position.y > plateau.min.y)
	const newY = position.y > plateau.min.y ? position.y - 1 : 0
	console.log(newY)
	return { x: position.x, y: newY }
}

export const moveWest = (position: Position, plateau: Plateau) => {
	const newX = position.x > plateau.min.x ? position.x - 1 : 0
	return { x: newX, y: position.y }
}

export const moveEast = (position: Position, plateau: Plateau) => {
	const newX = position.x < plateau.max.x ? position.x + 1 : plateau.max.x
	return { x: newX, y: position.y }
}
