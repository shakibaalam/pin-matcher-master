//create 4 digits pin randomly 
function getPin() {
    const pin = Math.round(Math.random() * 10000)
    pinString = pin + ''
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
// generate and display pin
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
//typed pin and display
document.getElementById('key-pad').addEventListener('click', function (event) {
    const num = event.target.innerText;
    const calc = document.getElementById('typed-num');
    if (isNaN(num)) {
        if (num == 'C') {
            calc.value = ''
        }
    }
    else {
        const previousCalc = calc.value;
        const newCalc = previousCalc + num;
        calc.value = newCalc;
    }
    // console.log(event.target.innerText)
})
// matching pin and error handling 
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-num').value;
    if (pin == typed) {
        document.getElementById('success').style.display = 'block'
        document.getElementById('fail').style.display = 'none'
    }
    else {
        document.getElementById('fail').style.display = 'block'
        document.getElementById('success').style.display = 'none'
    }
}