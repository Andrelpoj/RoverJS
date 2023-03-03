export type Position = {
	x: number
	y: number
}

export type Plateau = {
	min: Position
	max: Position
}

export type MoveResult =
	| { status: "success"; result: Position }
	| { status: "error"; error: Error }

//TODO: Create other validations for position and plateau (e.g.: negative values should not be valid)
const validatePositionInPlateau = (
	position: Position,
	plateau: Plateau
): Error | undefined => {
	if (
		position.x < plateau.min.x ||
		position.y < plateau.min.y ||
		position.x > plateau.max.x ||
		position.y > plateau.max.y
	)
		return Error("invalid position for plateau")
}

export const moveNorth = (position: Position, plateau: Plateau): MoveResult => {
	const err = validatePositionInPlateau(position, plateau)
	if (err) return { status: "error", error: err }

	const newValue = position.y < plateau.max.y ? position.y + 1 : plateau.max.y
	const newPosition = { ...position, y: newValue }
	return { status: "success", result: newPosition }
}

export const moveSouth = (position: Position, plateau: Plateau): MoveResult => {
	const err = validatePositionInPlateau(position, plateau)
	if (err) return { status: "error", error: err }

	const newValue = position.y > plateau.min.y ? position.y - 1 : 0
	const newPosition = { ...position, y: newValue }
	return { status: "success", result: newPosition }
}

export const moveWest = (position: Position, plateau: Plateau): MoveResult => {
	const err = validatePositionInPlateau(position, plateau)
	if (err) return { status: "error", error: err }

	const newValue = position.x > plateau.min.x ? position.x - 1 : 0
	const newPosition = { ...position, x: newValue }
	return { status: "success", result: newPosition }
}

export const moveEast = (position: Position, plateau: Plateau): MoveResult => {
	const err = validatePositionInPlateau(position, plateau)
	if (err) return { status: "error", error: err }

	const newValue = position.x < plateau.max.x ? position.x + 1 : plateau.max.x
	const newPosition = { ...position, x: newValue }
	return { status: "success", result: newPosition }
}
