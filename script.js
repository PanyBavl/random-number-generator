function generateRandomNumber() {
    var min = document.getElementById('number_a').value
    var max = document.getElementById('number_b').value
    var random = Math.floor(Math.random() * (max - min) + min)
    document.getElementById('randomNumber').innerHTML = random
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}