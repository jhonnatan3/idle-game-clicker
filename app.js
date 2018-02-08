'use strict';

(function () {
    //Defining DOM variables (elements)
    //Player cookies count element
    let playerCookies = document.getElementById("playerCookies");
    //Player cookies count element
    let playerCookiesPerClick = document.getElementById("playerCookiesPerClick");
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
        cookies: 79,
        perClick: 1
    }

    //Load save game on refresh/enter
    //loadGameSave();
    //Set cookie count (from save or initial player.cookies)
    updateCookieCount(player.cookies);

    //Prototype object for upgrades
    function UpgradeObject(name, price, nextUpgradePrice, type, count, value) {
        this.name = name;
        this.price = price;
        this.nextUpgradePrice = nextUpgradePrice;
        this.type = type;
        this.count = 0;
        this.value = value;
    }

    //Function to update cookie count
    function updateCookieCount(cookieCount) {
        playerCookies.innerText = player.cookies;
    }

    //Save game to Local Storage
    function saveGame() {
        localStorage.setItem('player', JSON.stringify(player));
        window.alert("Game saved to local storage");
    }

    //Load game save from Local Storage
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

    let purchaseButtons = [];
    //Function to check if any upgrades purchases are avalible
    function checkIfPurchasesAvalible(type) {
        if (player.cookies >= type.price) {
            let buttonExists = document.body.contains(document.getElementById("buy" + type.name));
            if (!buttonExists) {
                upgradesElement.innerHTML += "<button id='buy" + type.name + "'>Buy " + type.name + " (" + type.price + ")</button>";
                let purchaseButton = document.getElementById("buy" + type.name);
                purchaseButtons.push(purchaseButton);
            }
        }
    }

    function checkButtonAvalible() {
        var purchaseButton= purchaseButtons.map(a => a.id);
        purchaseButton.addEventListener('click', purchaseUpgrade, false);
    }

    function purchaseUpgrade(type) {

        console.log('aaa');
        player.cookies -= type.price;
        player.perClick = type.value;
        updateCookieCount(player.cookies);
        playerCookiesPerClick.innerText = "+" + player.perClick;
    }



    //Define upgrades PerClick
    const baker = new UpgradeObject("Baker", 80, "120%", "PerClick", 2);
    const bakery = new UpgradeObject("Bakery", 100, "120%", "PerClick", 5);


    playerName.innerText = player.name;
    playerCookiesPerClick.innerText = "+" + player.perClick;

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

    //Add +player.perClick cookie on cookies click
    cookiesImage.onclick = function (e) {
        player.cookies = player.cookies + player.perClick;
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