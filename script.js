// should be obvious what this does...

function generateRandomNumber() {
    var min = document.getElementById('number_a').value
    var max = document.getElementById('number_b').value
    var random = Math.floor(Math.random() * (max - min) + min)
    if (random == 42069) {
        document.getElementById('randomNumber').innerHTML = `${random}, nice. 👌`;
    } else if (random == 69) {
        document.getElementById('randomNumber').innerHTML = `${random} <div id="easteregg"> (haha funni number 😎) </div>`;
    } else if (random == 420) {
        document.getElementById('randomNumber').innerHTML = `${random} <div id="easteregg"> smoke weed everyday 🚬 </div>`;
    } else if (random == 67294383) {
    document.getElementById('randomNumber').innerHTML = `<div id="secret"> ${random}...? </div>` 
    } else {
        document.getElementById('randomNumber').innerHTML = random;
    }
}

// just checks if the input is a number, if not, dont enter it

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

// just for the instructions overlay, if the buttons clicked, open, if you click out of it, close

function on() {
    document.getElementById("overlay").style.display = "block";
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
}