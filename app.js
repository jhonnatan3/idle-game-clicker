//player Object
var player = {

} 

//Get Player name and display it
player.name = window.prompt('What is your name?', 'Player name');
var playerName = document.getElementById("playerName");
playerName.innerText = player.name;


//todo:
/*
SaveGame (cookie? local?)
Achevments
Statistics
*/