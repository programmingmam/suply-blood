firstText = "এবং কারোর মুখে";
secondText = "হাসির কারণ হোন।";
intervalTime = 400;
window.load = displayText();
function displayText() {
    // display first text
    document.querySelector('#dynamicContent').innerText = firstText;
    // display second text
    setTimeout(() => {
        document.querySelector('#dynamicContent').innerText = secondText;
    }, intervalTime * 3);
    // display third text
    setTimeout(() => {
        document.querySelector('#dynamicContent').innerText = thirdText;
    }, intervalTime * 5);
}

setInterval(() => {
    displayText();
}, intervalTime * 7);