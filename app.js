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
    //Change player  name element
    let changePlayerName = document.getElementById("changePlayerName");


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

    function changePlayerNames() {
        player.name = window.prompt('Change player name:', "Player name");
        if (player.name === null) {
            playerName.innerText = 'MysteriousX';
        } else {
            playerName.innerText = player.name;
        }
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

    //Function to check if any upgrades purchases are avalible
    function checkIfPurchasesAvalible(type) {
        if (player.cookies >= type.price) {
            let buttonExists = document.body.contains(document.getElementById("buy" + type.name));
            if (!buttonExists) {
                createButton(type);
            }
        }
    }

    function createButton(type) {
        let btn = document.createElement("button");
        btn.innerHTML = "Buy " + type.name + " (" + type.price + ")";
        btn.id = "buy" + type.name;
        btn.addEventListener("click", function () {
            purchaseUpgrade(type);
        });
        upgradesElement.appendChild(btn);
    }


    function purchaseUpgrade(type) {
        let btn = document.getElementById("buy" + type.name);
        if (player.cookies < type.price) {
            btn.className = "disabled";
        } else {
            btn.className = "";
            player.cookies -= type.price;
            player.perClick += type.value;
    
            console.log(typeof(player.perClick, type.value));
            console.log(player.perClick, type.value);
    
            updateCookieCount(player.cookies);
            playerCookiesPerClick.innerText = "+" + player.perClick;
            /*if (player.cookies < UpgradeObject.value) {
                upgradesElement.removeChild();
            }*/
        }
    }

    function addCookie() {
        player.cookies = player.cookies + player.perClick;
        updateCookieCount(player.cookies);

        checkIfPurchasesAvalible(baker);
        checkIfPurchasesAvalible(bakery);
    }


    //Define upgrades PerClick
    const baker = new UpgradeObject("Baker", 80, "120%", "PerClick", 0, 2);
    const bakery = new UpgradeObject("Bakery", 100, "120%", "PerClick", 0, 5);


    playerName.innerText = player.name;
    playerCookiesPerClick.innerText = "+" + player.perClick;

    //Change player name on button click
    changePlayerName.addEventListener('click', () => changePlayerNames());

    //Add +player.perClick cookie on cookies click
    cookiesImage.addEventListener('click', () => addCookie());

    //Save game [object to Local storage]
    saveGameElement.addEventListener('click', () => saveGame());

    //Load game [object from Local storage]
    loadGameElement.addEventListener('click', () => loadGameSave());
})()






//todo:
/*
Upgrades
Achivements
Statistics
*/