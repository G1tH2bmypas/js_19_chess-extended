function chess(name, x1, y1, x2, y2) {
	if (name === 'pawn') {
		return x2 === x1 + 1 && y2 === y1 + 1;
	} else if (name === 'rook') {
		return x2 === x1 || y2 === y1;
	} else if (name === 'bishop') {
		return Math.abs(x2 - x1) === Math.abs(y2 - y1);
	} else if (name === 'queen') {
		return x1 === x2 || y2 === y1 || Math.abs(y2 - y1) === Math.abs(x2 - x1);
	} else if (name === 'king') {
		return Math.abs(x2 - x1) <= 1 && Math.abs(y1 - y2) <= 1;
	} else if (name === 'knight') {
		return Math.abs(x2 - x1) === 2 && Math.abs(y2 - y1) === 1 || Math.abs(x2 - x1) === 1 && Math.abs(y2 - y1) === 2;
	} else {
		return false;
	}
}

module.exports = chess;
