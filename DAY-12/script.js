
const CHAR_UP = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const CHAR_LOW = 'abcdefghijkmnpqrstuvwxyz';
const CHAR_NUM = '23456789';
const CHAR_SYM = '!@#$%^&*';
const PASS_SIZE = 16;


const outputText = document.getElementById('outputText');
const actionBtn = document.getElementById('actionBtn');
const optUpper = document.getElementById('optUpper');
const optLower = document.getElementById('optLower');
const optNums = document.getElementById('optNums');
const optSymbols = document.getElementById('optSymbols');
const notify = document.getElementById('notify');


function createPassword() {
    let pool = '';

    if (optUpper.checked) pool += CHAR_UP;
    if (optLower.checked) pool += CHAR_LOW;
    if (optNums.checked) pool += CHAR_NUM;
    if (optSymbols.checked) pool += CHAR_SYM;

    if (pool === '') {
        pool = CHAR_LOW;
        optLower.checked = true;
    }

    let result = '';

    for (let i = 0; i < PASS_SIZE; i++) {
        result += pool[Math.floor(Math.random() * pool.length)];
    }

    outputText.textContent = result;
}

actionBtn.addEventListener('click', createPassword);
optUpper.addEventListener('change', createPassword);
optLower.addEventListener('change', createPassword);
optNums.addEventListener('change', createPassword);
optSymbols.addEventListener('change', createPassword);

createPassword();