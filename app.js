'use strict';

//Defining DOM variables (elements)
//Player cookies count element
let playerCookies = document.getElementById("playerCookies");
//Player  name element
let playerName = document.getElementById("playerName");
//Cookies image element
let cookiesImage = document.getElementById("cookies");
//Save game element
let saveGame = document.getElementById("saveGame");
//Load game element
let loadGame = document.getElementById("loadGame");

//Player Object
let player = {
    cookies: 0
}

updateCookieCount(player.cookies);

//Get Player name and display it
player.name = 'Artur';
playerName.innerText = player.name;

//Change player  name element
let changePlayerName = document.getElementById("changePlayerName");

//Change player name on button click
changePlayerName.onclick = function (e) {
    player.name = window.prompt('Change player name:', "Player name");
    playerName.innerText = player.name;
}

//Cookie object
let cookie = {
    count: 0
}

//Add +1 cookie on cookies click
cookiesImage.onclick = function (e) {
    player.cookies = player.cookies + 1;
    console.log(player.cookies);
    updateCookieCount(player.cookies);
}

function updateCookieCount(cookieCount) {
    playerCookies.innerText = player.cookies;
}

//Save game [Local storage]
saveGame.onclick = function (e) {
    localStorage.setItem('player', JSON.stringify(player));
}

//Load game [Local storage]
loadGame.onclick = function (e) {
    let plyerData = JSON.parse(localStorage.getItem('player'));
    console.log('Loaded player cookies: ', plyerData.cookies);
    console.log('Loaded player name: ', plyerData.name);

    playerCookies.innerText = plyerData.cookies;
    player.cookies = plyerData.cookies;
    playerName.innerText = plyerData.name;
    player.name = plyerData.name;
}




//todo:
/*
LoadGame (cookie doesnt work)
Achevments
Statistics
*/