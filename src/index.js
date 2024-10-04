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
};

function decode(expr) {
    let finalStr = '';
    let map = new Map([
        ['00',''],
        ['10','.'],
        ['11','-'],
        ['**',' ']
    ]);

    const arrayOfLetters = expr.match(/.{10}/g);
    for (let i=0; i<arrayOfLetters.length; i++){
        let letter = arrayOfLetters[i].match(/.{2}/g);
        let morseCharacter = '';
        for (let j=0; j<letter.length;j++){
            if (letter[j] === '**') {
                morseCharacter = ' ';
                break;
            }
            morseCharacter = morseCharacter + map.get(letter[j]);
        }
        if (morseCharacter === ' ') {
            finalStr = finalStr + morseCharacter;
        } else {
            finalStr = finalStr + MORSE_TABLE[morseCharacter];
        }
    }

    console.log(finalStr);
    return finalStr;
}
module.exports = {
    decode
}

