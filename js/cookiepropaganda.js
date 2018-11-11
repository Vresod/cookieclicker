function buyCookiePropaganda() {
	costs.cookiepropagandaCost = Math.floor(100 * Math.pow(1.1, upgrades.cookiepropagandas)); //works out the cost of this cookiepropaganda
	if (stats.cookies >= costs.cookiepropagandaCost) { //checks that the player can afford the cookiepropaganda
		upgrades.cookiepropagandas = upgrades.cookiepropagandas + 1; //increases number of cookiepropagandas
		clicksoundlow()
		stats.cookies = stats.cookies - costs.cookiepropagandaCost; //removes the cookies spent
		document.getElementById('cookiepropagandas').innerHTML = upgrades.cookiepropagandas; //updates the number of cookiepropagandas for the user
		document.getElementById('cookies').innerHTML = stats.cookies; //updates the number of cookies for the user
	};
	var nextCost = Math.floor(100 * Math.pow(1.1, upgrades.cookiepropagandas)); //works out the cost of the next cookiepropaganda
	document.getElementById('cookiepropagandaCost').innerHTML = nextCost; //updates the cookiepropaganda cost for the user
};

window.setInterval(function () {
	cookieClick(upgrades.cookiepropagandas * 25);
}, 1000);