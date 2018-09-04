var cookies = 0;

function clicksound(){
  document.getElementById('click').play();
};

function clicksoundlow(){
  document.getElementById('clicklow').play();
};

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

window.setInterval(function (){
  var cps = cursors + (grandmas * 2) + (cookiecowboys * 5);
  document.getElementById('cps').innerHTML = cps;
}, 10);
