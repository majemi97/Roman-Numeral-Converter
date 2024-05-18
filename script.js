document.getElementById("convert-btn").addEventListener("click", function() {
    var numberInput = document.getElementById("number").value;
    var outputDiv = document.getElementById("output");
    
    if (numberInput === "") {
        outputDiv.textContent = "Please enter a valid number";
        return;
    }
    
    var number = parseInt(numberInput);
    
    if (number === -1) {
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
        return;
    }
    
    if (number >= 4000) {
        outputDiv.textContent = "Please enter a number less than or equal to 3999";
        return;
    }
    
    var romanNumeral = convertToRoman(number);
    
    outputDiv.textContent = romanNumeral;
});

function convertToRoman(num) {
    var romanNumeral = "";
    var romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];
    
    romanNumeral += romanNumerals[3][Math.floor(num / 1000)];
    romanNumeral += romanNumerals[2][Math.floor((num % 1000) / 100)];
    romanNumeral += romanNumerals[1][Math.floor((num % 100) / 10)];
    romanNumeral += romanNumerals[0][num % 10];
    
    return romanNumeral;
}
