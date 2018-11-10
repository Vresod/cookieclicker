 var stats = {
	"cookies": 0,
	"cps": 0,
}
var upgrades = {
	"cursors": 0,
	"grandmas": 0,
	"cookiecowboys": 0,
	"cookiepropagandas": 0;
	"cookiejesuses": 0,
}
var costs = {
	"cursorCost": 0,
	"grandmaCost": 0,
	"cookiecowboyCost": 0,
	"cookiepropagandas": 0,
	"cookiejesusCost": 0,
}
var penalties = {
	"autoBuy": false,
	"fakeCookies": false,
}

function clicksound() {
	document.getElementById('click').play();
};

function clicksoundlow() {
	document.getElementById('clicklow').play();
};

function cookieClick(number) {
	stats.cookies = stats.cookies + number;
	document.getElementById("cookies").innerHTML = stats.cookies;
	document.title = stats.cookies + ' Cookies - Cookie Clicker'
};

window.setInterval(function () {
	stats.cps = cursors + (grandmas * 2) + (cookiecowboys * 5) + (cookiepropagandas * 25) + (cookiejesuses * 50);
	document.getElementById('cps').innerHTML = stats.cps;
}, 10);

function autoBuy() {
	window.setInterval(function () {
		buyCookieCowboy();
		buyCookieJesus();
		buyCursor();
		buyGrandma();
		buyCookiePropaganda();
		penalties.autoBuy = true;
	}, 10)
}

function fakeCookies() {
	window.setinterval(function () {
		penalties.fakeCookies = true;
	}, 10)
}