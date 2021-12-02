function calc() {
    hexString = document.getElementById("pulseinput").value;
    decimal = parseInt(hexString, 16);
    decimal = (decimal-(decimal%10**18))/10**18;
    dollar = decimal*0.1;


    decimal = numberWithSpaces(decimal);
    dollar = numberWithSpaces(dollar);

    document.getElementById("pulse").innerHTML = decimal + " pls";
    document.getElementById("dollar").innerHTML = dollar + " $ (for 1 pls = 0.1$)";
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}