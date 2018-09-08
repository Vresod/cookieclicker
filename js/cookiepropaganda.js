var cookiepropagandas = 0;

function buyCookiePropaganda() {
	var cookiepropagandaCost = Math.floor(100 * Math.pow(1.5, cookiepropagandas)); //works out the cost of this cookiepropaganda
	if (cookies >= cookiepropagandaCost) { //checks that the player can afford the cookiepropaganda
		cookiepropagandas = cookiepropagandas + 1; //increases number of cookiepropagandas
		clicksoundlow()
		cookies = cookies - cookiepropagandaCost; //removes the cookies spent
		document.getElementById('cookiepropagandas').innerHTML = cookiepropagandas; //updates the number of cookiepropagandas for the user
		document.getElementById('cookies').innerHTML = cookies; //updates the number of cookies for the user
	};
	var nextCost = Math.floor(100 * Math.pow(1.5, cookiepropagandas)); //works out the cost of the next cookiepropaganda
	document.getElementById('cookiepropagandaCost').innerHTML = nextCost; //updates the cookiepropaganda cost for the user
};

window.setInterval(function () {

	cookieClick(cookiepropagandas * 25);

}, 1000);
