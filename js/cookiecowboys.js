var cookiecowboys = 0;

function buyCookieCowboy(){
    var cookiecowboyCost = Math.floor(50 * Math.pow(1.5,cookiecowboys));     //works out the cost of this cookiecowboy
    if(cookies >= cookiecowboyCost){                                   //checks that the player can afford the cookiecowboy
        cookiecowboys = cookiecowboys + 1;                                   //increases number of cookiecowboys
        clicksoundlow()
      cookies = cookies - cookiecowboyCost;                          //removes the cookies spent
        document.getElementById('cookiecowboys').innerHTML = cookiecowboys;  //updates the number of cookiecowboys for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(50 * Math.pow(1.5,cookiecowboys));       //works out the cost of the next cookiecowboy
    document.getElementById('cookiecowboyCost').innerHTML = nextCost;  //updates the cookiecowboy cost for the user
};

window.setInterval(function (){

  cookieClick(cookiecowboys * 5);

}, 1000);
