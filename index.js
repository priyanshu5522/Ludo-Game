var randomNumber1= Math.floor(Math.random()*6)+1;
var img= "dice" + randomNumber1+ ".png";
var src = "images/" + img;
document.querySelector("img").setAttribute("src",src);

var randomNumber2= Math.floor(Math.random()*6)+1;
var img= "dice" + randomNumber2+ ".png";
var src = "images/" + img;
document.querySelectorAll("img")[1].setAttribute("src",src);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Winner";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Winner";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
function refreshPage(){
    window.location.reload();
} 