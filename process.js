"use strict";
exports.__esModule = true;
exports.execute = void 0;
var move = function (plateau, position) {
    var newX, newY;
    switch (position.direction) {
        case "N":
            newY = position.y + 1 <= plateau.y ? position.y + 1 : plateau.y;
            return {
                x: position.x,
                y: newY,
                direction: position.direction
            };
        case "S":
            newY = position.y - 1 >= 0 ? position.y - 1 : 0;
            return {
                x: position.x,
                y: newY,
                direction: position.direction
            };
        case "W":
            newX = position.x - 1 >= 0 ? position.x - 1 : 0;
            return {
                x: newX,
                y: position.y,
                direction: position.direction
            };
        case "E":
            newX = position.x + 1 <= plateau.x ? position.x + 1 : plateau.x;
            return {
                x: newX,
                y: position.y,
                direction: position.direction
            };
        default:
            //TODO: Throw error
            return position;
    }
};
var rotate = function (current, rotate) {
    switch (current) {
        case "N":
            if (rotate === "L")
                return "W";
            return "E";
        case "S":
            if (rotate === "L")
                return "E";
            return "W";
        case "W":
            if (rotate === "L")
                return "S";
            return "N";
        case "E":
            if (rotate === "L")
                return "N";
            return "S";
    }
};
var execute = function (plateau, position, instructions) {
    instructions.forEach(function (instruction) {
        if (instruction === "M") {
            var result = move(plateau, position);
            position.x = result.x;
            position.y = result.y;
        }
        if (["L", "R"].indexOf(instruction) !== -1) {
            position.direction = rotate(position.direction, instruction);
        }
        //TODO: Other cases should throw error
    });
    console.log("".concat(position.x, " ").concat(position.y, " ").concat(position.direction));
};
exports.execute = execute;
