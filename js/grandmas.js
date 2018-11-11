function buyGrandma() {
	costs.grandmaCost = Math.floor(25 * Math.pow(1.1, upgrades.grandmas)); //works out the cost of this grandma
	if (stats.cookies >= costs.grandmaCost) { //checks that the player can afford the grandma
		upgrades.grandmas = upgrades.grandmas + 1; //increases number of upgrades.grandmas
		clicksoundlow()
		stats.cookies = stats.cookies - costs.grandmaCost; //removes the stats.cookies spent
		document.getElementById('grandmas').innerHTML = upgrades.grandmas; //updates the number of grandmas for the user
		document.getElementById('cookies').innerHTML = stats.cookies; //updates the number of cookies for the user
	};
	var nextCost = Math.floor(25 * Math.pow(1.1, upgrades.grandmas)); //works out the cost of the next grandma
	document.getElementById('grandmaCost').innerHTML = nextCost; //updates the grandma cost for the user
};

window.setInterval(function () {

	cookieClick(upgrades.grandmas * 2);

}, 1000);
