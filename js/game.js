var cookies = 0;

var cpc = 1;

function clicksound() {
	document.getElementById('click').play();
};

function clicksoundlow() {
	document.getElementById('clicklow').play();
};

function cookieClick(number) {
	cookies = cookies + number;
	document.getElementById("cookies").innerHTML = cookies;
	document.title = cookies + ' Cookies - Cookie Clicker'
};

window.setInterval(function () {
	var cps = cursors + (grandmas * 2) + (cookiecowboys * 5) + (cookiepropagandas * 25) + (cookiejesuses * 50);
	document.getElementById('cps').innerHTML = cps;
}, 10);

function cheat(number) {
	cookieClick(number);

}