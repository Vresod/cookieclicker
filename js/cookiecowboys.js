function buyCookieCowboy() {
	costs.cookiecowboyCost = Math.floor(50 * Math.pow(1.1, upgrades.cookiecowboys)); //works out the cost of this cookiecowboy
	if (cookies >= cookiecowboyCost) { //checks that the player can afford the cookiecowboy
		upgrades.cookiecowboys = upgrades.cookiecowboys + 1; //increases number of cookiecowboys
		clicksoundlow()
		stats.cookies = stats.cookies - costs.cookiecowboyCost; //removes the cookies spent
		document.getElementById('cookiecowboys').innerHTML = upgrades.cookiecowboys; //updates the number of cookiecowboys for the user
		document.getElementById('cookies').innerHTML = stats.cookies; //updates the number of cookies for the user
	};
	var nextCost = Math.floor(50 * Math.pow(1.1, upgrades.cookiecowboys)); //works out the cost of the next cookiecowboy
	document.getElementById('cookiecowboyCost').innerHTML = nextCost; //updates the cookiecowboy cost for the user
};

window.setInterval(function () {

	cookieClick(upgrades.cookiecowboys * 5);

}, 1000);