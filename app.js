'use strict';

(function () {
    //Defining DOM variables (elements)
    //Player cookies count element
    let playerCookies = document.getElementById("playerCookies");
    //Player  name element
    let playerName = document.getElementById("playerName");
    //Cookies image element
    let cookiesImage = document.getElementById("cookies");
    //Save game element
    let saveGameElement = document.getElementById("saveGame");
    //Load game element
    let loadGameElement = document.getElementById("loadGame");
    //Upgrades container element
    let upgradesElement = document.getElementById("upgrades");

    //Player Object
    let player = {
        name: 'Artur',
        cookies: 0
    }

    //upgrades


    loadGameSave();
    updateCookieCount(player.cookies);

    function UpgradeObject(name, price, nextUpgradePrice, type, count, value) {
        this.name = name;
        this.price = price;
        this.nextUpgradePrice = nextUpgradePrice;
        this.type = type;
        this.count = 0;
        this.value = value;
    }

    function updateCookieCount(cookieCount) {
        playerCookies.innerText = player.cookies;
    }

    function saveGame() {
        localStorage.setItem('player', JSON.stringify(player));
        window.alert("Game saved to local storage");
    }

    function loadGameSave() {
        if (typeof (Storage) !== "undefined") {
            if (localStorage.getItem('player') != null) {
                let plyerData = JSON.parse(localStorage.getItem('player'));

                player.cookies = plyerData.cookies;
                updateCookieCount(player.cookies);

                playerName.innerText = plyerData.name;
                player.name = plyerData.name;

                window.alert("Loaded saved data. Player: " + plyerData.name + ", cookies: " + plyerData.cookies);
            }
        }

    }

    function checkIfPurchasesAvalible(type) {
        if (player.cookies >= type.price) {
            let buttonExists = document.body.contains(document.getElementById("buy" + type.name));
            if (!buttonExists) {
                upgradesElement.innerHTML += "<button id='buy" + type.name + "'>Buy " + type.name + "(" + type.price + ")</button>";
            }
        }
    }

    const baker = new UpgradeObject("Baker", 80, "120%", "PerClick", 2);
    const bakery = new UpgradeObject("Bakery", 100, "120%", "PerClick", 5);






    //Get Player name and display it
    playerName.innerText = player.name;

    //Change player  name element
    let changePlayerName = document.getElementById("changePlayerName");

    //Change player name on button click
    changePlayerName.onclick = function (e) {
        player.name = window.prompt('Change player name:', "Player name");
        if (player.name === null) {
            playerName.innerText = 'MysteriousX';
        } else {
            playerName.innerText = player.name;
        }
    }

    //Add +1 cookie on cookies click
    cookiesImage.onclick = function (e) {
        player.cookies = player.cookies + 1;
        updateCookieCount(player.cookies);

        checkIfPurchasesAvalible(baker);
        checkIfPurchasesAvalible(bakery);
    }







    //Save game [object on Local storage]
    saveGameElement.onclick = function (e) {
        saveGame()
    }
    //Load game [object from Local storage]
    loadGameElement.onclick = function (e) {
        loadGameSave();

    }




})()





//todo:
/*
Upgrades
Achivements
Statistics
*/