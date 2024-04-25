const inputBox = document.querySelector('.input');
const refreshBtn = document.querySelector('.refreshBtn');
const userInput = document.querySelector('.value');
const submitBtn = document.querySelector('.submit');
const message = document.getElementById('.message');



function getRandomTextDecoration() {
    const decorations = ['none', 'underline'];
    return decorations[Math.floor(Math.random() * decorations.length)];
}

function getRandomFontStyle() {
    const styles = ['normal', 'italic'];
    return styles[Math.floor(Math.random() * styles.length)];
}

function getRandomColor() {
    const str = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        idx = Math.floor(Math.random() * 16);
        color += str[idx];
    }
    return color;
}


function randomGenerate() {
    str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONPQRSTUVWXYZ123456789";
    length = Math.floor(Math.random() * 5 + 5);

    let captcha = "";
    for (let i = 0; i <= length; i++) {
        idx = Math.floor(Math.random() * str.length)
        captcha += str.charAt(idx);
    }
    console.log(captcha);
    inputBox.value = captcha;
    inputBox.style.color = getRandomColor();
    inputBox.style.fontStyle = getRandomFontStyle();
    inputBox.style.textDecoration = getRandomTextDecoration() + 'px';

}

window.onload = randomGenerate();



inputBox.addEventListener('copy', function (event) {
    event.preventDefault(); // Prevent copying
    alert('Copying is not allowed.');
})

refreshBtn.addEventListener('click', function () {
    randomGenerate();
});

submitBtn.addEventListener('click', function () {
    let enterValue = userInput.value;
    let txt;
    if (enterValue == inputBox.value) {
        alert('Success');
    }
    else {
        alert('Please enter correct caption');
    }
    userInput.value = '';
    randomGenerate();
})
