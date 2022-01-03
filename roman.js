/*Specify number in parenthesis
Segregate number into place values
Return number in new Array
Express them in their corresponding roman numeral value
Display result*/

const textBox = document.getElementById('textbox');
const displayNumeral = document.getElementById('numeral');
textBox.addEventListener('input', () => {
str = convertNumeral(textBox.value);
// Retrieve number
function convertNumeral(num) {
  var string = '';
  string += num;
  return string;
}
// Preparing Array
var returnArray = [];
var numeralBreakdown = [`${str[str.length-1]}`, `${str[str.length-2]}`,`${str[str.length-3]}`,`${str[str.length-4]}`];

// Pushing value breakdown into array
for (i = 0; i < numeralBreakdown.length; i++) {
  if (!numeralBreakdown[i].includes('undefined')) {
    returnArray.unshift(numeralBreakdown[i]);
  }
}

let unit = returnArray[returnArray.length-1];
let tens = returnArray[returnArray.length-2];
let hundreds = returnArray[returnArray.length-3];
let thousands = returnArray[returnArray.length-4];
let totalResult = '';
let unitResult = '';
let tensResult = '';
let hundredsResult = '';
let thousandResult = '';
let outputUnit = 0;
let outputTens = 0;
let outputHundreds = 0;
let outputThousands = 0;

function numeralIncrement(place, output, result, letter) {
  while (output < place) {
    output = output + 1;
    result += letter;
  }
    return result;
}

if (unit) {
  unitResult = numeralIncrement(unit, outputUnit, unitResult,'I');
   (unit == 4) ? unitResult = 'IV' : false;
   (unit == 5) ? unitResult = 'V' : false;
   if (unit > 5 && unit < 9) {
     unitResult = 'V';
     while (outputUnit < unit - 5) {
       outputUnit = outputUnit + 1;
       unitResult += 'I';
     }
  }
  (unit == 9) ? unitResult = 'IX' : false;
}
if (tens) {
  tensResult = numeralIncrement(tens, outputTens, tensResult,'X');
  (tens == 4) ? tensResult = 'XL' : false;
   (tens == 5) ? tensResult = 'L' : false;
   if (tens > 5 && tens < 9) {
     tensResult = 'L';
     while (outputTens < tens - 5) {
       outputTens = outputTens + 1;
       tensResult += 'X';
     }
  }
  (tens == 9) ? tensResult = 'XC' : false;
}
if (hundreds) {
  hundredsResult = numeralIncrement(hundreds, outputHundreds, hundredsResult,'C');
  (hundreds == 4) ? hundredsResult = 'CD' : false;
   (hundreds == 5) ? hundredsResult = 'D' : false;
   if (hundreds > 5 && hundreds < 9) {
     hundredsResult = 'D';
     while (outputHundreds < hundreds - 5) {
       outputHundreds = outputHundreds + 1;
       hundredsResult += 'C';
     }
  }
  (hundreds == 9) ? hundredsResult = 'CM' : false;
} 
if (thousands) {
  thousandResult = numeralIncrement(thousands, outputThousands, thousandResult,'M');
}
// Display result
totalResult = thousandResult + hundredsResult + tensResult + unitResult;
// Check validity and number length
if (thousands > 3 || str.length > 4) {
  totalResult = '';
}
  displayNumeral.textContent = totalResult;
})