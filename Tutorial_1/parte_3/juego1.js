
//Generar un número aleatorio entre 1 y 100.
let randomNumber = Math.floor(Math.random() * 100) + 1;

//Registrar el número del intento en el que el jugador se encuentre. Empezando en 1.
let guessCount = 1;

//Elemento HTML para listar los intentos del jugador
const guesses = document.querySelector('.guesses');

//Elemento HTML para indicar si adivinó o no
const lastResult = document.querySelector('.lastResult');

//To low or to high?
const lowOrHi = document.querySelector('.lowOrHi');

//Boton submit
const guessSubmit = document.querySelector('.guessSubmit');

//Campo con el valor enviado
const guessField = document.querySelector('.guessField');

let resetButton;

function checkGuess() {
    //El número ingresado por el jugador
    let userGuess = Number(guessField.value);

    //Inicialment la lista de tentativa es vacia
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    //Se concatenan las tentativas
    guesses.textContent += userGuess + ' ';

    //Caso: el jugador ganó
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } 
    // Si no ganó, el partido es terminado?
    else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } 
    // si el partido no es terminado, se indica el error
    else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    //se incrementa el numero de tentativa
    guessCount++;
    // se reinicializa el campo para ingresa una tentativa y se pone el focus sobre este elemento HTML
    guessField.value = '';
    guessField.focus();
}

//el listener sobre el boton "submit", evento "Click"
guessSubmit.addEventListener('click', checkGuess);

//lo que pasa cuando el jugador intentó 10 veces
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//Reset despues un partido perdido
function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';

    //se elige un nuevo número al azar
    randomNumber = Math.floor(Math.random() * 100) + 1;
}