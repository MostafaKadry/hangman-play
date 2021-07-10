const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector('.letters');

lettersArray.forEach(letter => {
    let span = document.createElement('span');
    let theletter = document.createTextNode(letter);
    span.appendChild(theletter);
    span.className = 'letter-box';
    lettersContainer.appendChild(span);
});

let words = {
    programming: ['PHP', 'JAVASCRIPT', 'C', "R", "PAYHON", 'JAVA', 'GO', 'SCALA', 'PRTRAN'],
    movies: ['TABOOK', 'BADR', 'OUHOD', 'HANEEN'],
    people: ['TALHAA', 'ELZOBAER', 'ALI', 'OUTHMAN', 'OMAR', 'IBNABBAS'],
    countries: ['SYRIA', 'EGYPT', 'MAKKAH', 'ELHEGAZ', 'ELBAHRREN', 'FALASTEEN']
}

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
console.log(randomValueNumber);
console.log(randomPropValue);
let randomValueName = randomPropValue[randomValueNumber]
console.log(randomValueName);

document.querySelector('.game-info .category span').innerHTML = randomPropName;
letterGuessContainer = document.querySelector('.letters-guess');
let letterAndSpace = Array.from(randomValueName);
letterAndSpace.forEach(letter => {
    let emptySpan = document.createElement('span');
    
    if(letter === ' '){
        emptySpan.className = 'with-space';
    }
    
    letterGuessContainer.appendChild(emptySpan);
});

let guessSpan = document.querySelectorAll('.letters-guess span');
let wrongAttempts = 0,
    theDraw = document.querySelector('.hangman-drow');
let whatInGuessSpan = [];
document.addEventListener('click', e => {
    let theStatus = false;
    if(e.target.className === 'letter-box'){
        e.target.classList.add('clicked');
        let theClickedLetter = e.target.innerHTML;
            
        letterAndSpace.forEach((wordLetter, wordIndex) => {
           if(wordLetter === theClickedLetter){
               theStatus = true;
               guessSpan.forEach((span, spanIndex) => {
                  if(wordIndex === spanIndex){
                    span.innerHTML = wordLetter;
                      whatInGuessSpan.push(wordLetter);
                  } 
               });
           }         
        });
           if(letterAndSpace.length === whatInGuessSpan.length){
               console.log('mostfaaaaa');
               passGame();
           }             
         console.log(theStatus);
        if(theStatus !== true){
            wrongAttempts++;
            theDraw.classList.add(`wrong-${wrongAttempts}`);
            
            document.querySelector('#failor').play();
            
            
            
            if(wrongAttempts === 8){
                endGame();
                
                lettersContainer.classList.add('finished');
            }
        } else{document.querySelector('#success').play();}
    }
   
    
    
    
});

function endGame() {
    let div = document.createElement('div');
    
    let divText = document.createTextNode(`Game over the right word is ${randomValueName}`);
    
    div.appendChild(divText);
    
    div.className = 'popup';
    
    document.body.appendChild(div);
}

function passGame() {
    let passDiv = document.createElement('div');
    let passDivTxt = document.createTextNode(`congratulation you passed the game with ${wrongAttempts} wrongs`);
    
    passDiv.appendChild(passDivTxt);
    passDiv.className = 'pass';
    document.body.appendChild(passDiv);
                    lettersContainer.classList.add('finished');

}


