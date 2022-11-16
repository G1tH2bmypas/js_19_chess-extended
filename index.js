function chess(name, x1, y1, x2, y2) {
	return name === 'pawn' ? x2 === x1 + 1 && y2 === y1 + 1 || x2 === x1 - 1 && y2 === y1 + 1 : name === 'rook' ? x2 === x1 || y2 === y1 : name === 'bishop' ? Math.abs(x2 - x1) === Math.abs(y2 - y1) : name === 'queen' ? x1 === x2 || y2 === y1 || Math.abs(y2 - y1) === Math.abs(x2 - x1) : name === 'king' ? Math.abs(x2 - x1) <= 1 && Math.abs(y1 - y2) <= 1 : name === 'knight' ? Math.abs(x2 - x1) === 2 && Math.abs(y2 - y1) === 1 || Math.abs(x2 - x1) === 1 && Math.abs(y2 - y1) === 2 : false;
}

module.exports = chess;
