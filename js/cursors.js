function buyCursor() {
	costs.cursorCost = Math.floor(10 * Math.pow(1.1, upgrades.cursors)); //works out the cost of this cursor
	if (stats.cookies >= costs.cursorCost) { //checks that the player can afford the cursor
		upgrades.cursors = upgrades.cursors + 1; //increases number of cursors
		clicksoundlow()
		stats.cookies = stats.cookies - costs.cursorCost; //removes the stats.cookies spent
		document.getElementById('cursors').innerHTML = upgrades.cursors; //updates the number of upgrades.cursors for the user
		document.getElementById('cookies').innerHTML = stats.cookies; //updates the number of stats.cookies for the user
	};
	var nextCost = Math.floor(10 * Math.pow(1.1, upgrades.cursors)); //works out the cost of the next cursor
	document.getElementById('cursorCost').innerHTML = nextCost; //updates the cursor cost for the user
};

window.setInterval(function () {

	cookieClick(upgrades.cursors);

}, 1000);
