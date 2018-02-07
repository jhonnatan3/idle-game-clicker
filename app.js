'use strict';

//player Object
var player = {
} 

//Get Player name and display it
player.name = 'Artur';
let playerName = document.getElementById("playerName");
playerName.innerText = player.name;

//Change player name on button click
let changePlayerName = document.getElementById("changePlayerName");
changePlayerName.onclick = function(e){
    player.name = window.prompt('Change player name:', "Player name");
    playerName.innerText = player.name;
    
}

//todo:
/*
SaveGame (cookie? local?)
Achevments
Statistics
*/ 