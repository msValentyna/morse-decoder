const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    let str = expr;
    let numberArr = [];


    for (; str.length ;) {
        let strSlice = str.slice(0, 10);
        numberArr.push(strSlice);
        str = str.replace(strSlice, '');
    }

    const numberArrWithoutZero = numberArr.map((elem) => elem.replace(/^0+/, ''));

    const morseArrDot = numberArrWithoutZero.map((elem) => elem.replaceAll('10', '.'));

    const morseArrDotDash = morseArrDot.map((elem) => elem.replaceAll('11', '-'));

    const morseArrDotDashSpace = morseArrDotDash.map((elem) => elem.replaceAll('**********', ' '));

    const morseArr = morseArrDotDashSpace.map((elem) => {
        
        for (let [key, value] of Object.entries(MORSE_TABLE)) {
            if (elem === key) {
                return elem.replace(key, value);
            }   
        }
    });

    return morseArr.join('');
}

// console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))

module.exports = {
    decode
}
