/* Iteration 4: Make the Canvas App Functional */
let $backgroundButton =  document.getElementById("background-button");
let $background = document.getElementById("background");

$backgroundButton.oninput=function(){
  $background.style.fill=$backgroundButton.value;

}


let $jerseyButton=document.getElementById("jersey-button");
let $jersey= document.getElementById("jersey");

$jerseyButton.oninput=function(){
  $jersey.style.fill=$jerseyButton.value;
}

let $faceButton=document.getElementById("face-button");
let $face=document.getElementById("face");

$faceButton.oninput=function(){
  $face.style.fill=$faceButton.value;
}

let $hairButton=document.getElementById("hair-button");
let $hair=document.getElementById("hair");

$hairButton.oninput=function(){
  $hair.style.fill=$hairButton.value;
}

let $crButton=document.getElementById("cr-button");
let $cr=document.getElementById("cr");

$crButton.oninput=function(){
  $cr.style.fill=$crButton.value;
}

let $numberButton=document.getElementById("number-button");
let $number=document.getElementById("number");

$numberButton.oninput=function(){
  $number.style.fill=$numberButton.value;
}


