var grandmas = 0;

function buyGrandma(){
    var grandmaCost = Math.floor(25 * Math.pow(1.1,grandmas));     //works out the cost of this grandma
    if(cookies >= grandmaCost){                                   //checks that the player can afford the grandma
        grandmas = grandmas + 1;                                   //increases number of grandmas
        clicksoundlow()
      cookies = cookies - grandmaCost;                          //removes the cookies spent
        document.getElementById('grandmas').innerHTML = grandmas;  //updates the number of grandmas for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(25 * Math.pow(1.5,grandmas));       //works out the cost of the next grandma
    document.getElementById('grandmaCost').innerHTML = nextCost;  //updates the grandma cost for the user
};

window.setInterval(function (){

  cookieClick(grandmas * 2);

}, 1000);
