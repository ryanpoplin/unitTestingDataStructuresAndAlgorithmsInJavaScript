module.exports = function add() {
	var total = 0;
	for (var index = 0, length = arguments.length; index < length; index++) {
		if (typeof arguments[index] === "number") {
			total += arguments[index];
		}
	}
	return total;
};