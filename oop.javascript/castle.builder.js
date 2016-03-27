const Castle = require("./castle");

module.exports = function() {
	function CastleBuilder() {};
	CastleBuilder.prototype.buildCastle = function(size) {
		return new Castle(size);
	};
};