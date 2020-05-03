let ready = function () {
    document.querySelector("#dice-select").addEventListener("change", changeSelect);
    document.querySelector("#roll").addEventListener("click", rollDice);
};

// Load Docuemnt
if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    ready()
}
else {
    document.addEventListener("DOMContentLoaded", ready)
}

// Change Select
function changeSelect (event) {

    event.preventDefault();

    let select = document.querySelector("#dice-select");
    
    let value = select.options[select.selectedIndex].value;

    let diceDiv =  document.querySelector("#" + value);

    let diceArr = document.querySelectorAll(".dice");

    for (let i = 0; i < diceArr.length; i++) {
        removeActiveClassInArr(diceArr[i].children);
    }
    
    rollDice(event);
}

// Roll dice
function rollDice (event) {
    
    event.preventDefault();

    let select = document.querySelector("#dice-select");

    let diceDiv = document.querySelector("#" + select.options[select.selectedIndex].value);

    let rand = getRandomNum(0, getMaxValue(select.options[select.selectedIndex].value));

    removeAnimationInArr(diceDiv.children)

    removeActiveClassInArr(diceDiv.children);

    displayDice(rand, diceDiv.children)
}

// Get Random Number
function getRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min) + min + 1);
}

//Remove Active Class in Array
function removeActiveClassInArr (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("active");
    }
}

// Display Dice On Screen
function displayDice (randomNum, arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].getAttribute("side") == randomNum) {
            arr[i].classList.add("active");
            addAnimation(arr[i], "bounce");
            return;
        }
    }
}

// Add Animation
function addAnimation (element, animationName) {
    element.classList.add("animated");
    element.classList.add(animationName);
}

// Remove Animation
function removeAnimation (element, animationName) {
    element.classList.remove("animated");
    element.classList.remove(animationName);
}

// Remove Animation In Array
function removeAnimationInArr (arr) {
    for (let i = 0; i < arr.length; i++) {
        removeAnimation(arr[i], "bounce")
    }
}

//Get Max Value
function getMaxValue(value) {
    switch (value) {
        case "d4":
            return 4;
        case "d6": 
            return 6;
        case "d8":
            return 8;
    }
}