let ready = function () {

    heartButton = document.querySelector("#heart");

    heartButton.addEventListener("click", getChances);
    //yourNameInput.addEventListener("keypress", engOnly)

}

// Load document
if(document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    ready();
}
else {
    document.addEventListener("DOMContentLoaded", ready);
}

// Calculate Chances
function getChances (event) {
    event.preventDefault();

    yourNameInput = document.querySelector("#yourName");

    crushNameInput = document.querySelector("#crushName");

    numberResult = document.querySelector("#number_result");

    text_result = document.querySelector("#text_result");

    nubmer_result = document.querySelector("#nubmer_result");

    removeResult(text_result);

    removeResult(number_result);

    if (isEmpty(yourNameInput) || isEmpty(crushNameInput)) {
        text_result.innerText = "Please type in your name and your crush name";
        setDanger(text_result);
        return;
    }

    if (!(isEngOnly(yourNameInput) && isEngOnly(crushNameInput))) {
        text_result.innerText = "You can type in only English letters A-Z and a-z";
        setDanger(text_result);
        return;
    }

    let rand = getRandom(0, 100);

    number_result.innerText = rand;
    number_result.classList.add("active");

    if (rand >= 0 && rand <= 25) {
        text_result.innerText = yourNameInput.value + " and " + crushNameInput.value + " don't have anything in common.";
    } else if (rand > 25 && rand <= 50) {
        text_result.innerText = "There is a chanse for " + yourNameInput.value + " and " + crushNameInput.value + " to be together but unlikely.";
    } else if (rand > 50 && rand <= 75) {
        text_result.innerText = yourNameInput.value + " and " + crushNameInput.value + " more likely be together.";
    } else if (rand > 75) {
        text_result.innerText = yourNameInput.value + " and " + crushNameInput.value + " made for each other.";
    }

    text_result.classList.add("green");
}

// Calculate Random Nubmer
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min) + min + 1);
}

// Check if input empty
function isEmpty (element) {
    if(element.value.length === 0)
        return true;
    return false;
}

//Check if only English words used
function isEngOnly(element) {
    var letters = /^[A-Za-z]+$/;

    if (element.value.match(letters))
        return true;
    return false;
}

// Allow only English letters
// function engOnly (event) {
//     if     ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)) {
//         return;
//     }
//     else {
//         this.value = "";
//     }
// }

//Remove text in results
function removeResult (element) {
    element.innerText = "";
    element.classList.remove("active");
    element.classList.remove("green");
    element.classList.remove("red");
}

//Set danger result
function setDanger (element) {
    element.classList.add("red");
    element.classList.add("active");
}