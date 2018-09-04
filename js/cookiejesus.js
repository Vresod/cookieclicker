var cookiejesuses = 0;

function buyCookieJesus(){
    var cookiejesusCost = Math.floor(1000 * Math.pow(1.5,cookiejesuses));     //works out the cost of this cookiejesus
    if(cookies >= cookiejesusCost){                                   //checks that the player can afford the cookiejesus
        cookiejesuses = cookiejesuses + 1;                                   //increases number of cookiejesuses
        clicksoundlow()
      cookies = cookies - cookiejesusCost;                          //removes the cookies spent
        document.getElementById('cookiejesuses').innerHTML = cookiejesuses;  //updates the number of cookiejesuses for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(1000 * Math.pow(1.5,cookiejesuses));       //works out the cost of the next cookiejesus
    document.getElementById('cookiejesusCost').innerHTML = nextCost;  //updates the cookiejesus cost for the user
};

window.setInterval(function (){

  cookieClick(cookiejesuses * 50);

}, 1000);
