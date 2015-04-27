//these variables are pretty self-explanatory, they get used in functions later.
var tempChoice = undefined;
var timerAmount = 15;
var correctTotal = 0;
var livesLeft = 3;
var pokemon = [
     {name:"bulbasaur",
     image:"assets/img/001.png"},
     {name:"ivysaur",
     image:"assets/img/002.png"},
     {name:"venusaur",
     image:"assets/img/003.png"},
     {name:"charmander",
     image:"assets/img/004.png"},
     {name:"charmeleon",
     image:"assets/img/005.png"},
     {name:"charizard",
     image:"assets/img/006.png"},
     {name:"squirtle",
     image:"assets/img/007.png"},
     {name:"wartortle",
     image:"assets/img/008.png"},
     {name:"blastoise",
     image:"assets/img/009.png"},
     {name:"caterpie",
     image:"assets/img/010.png"},
     {name:"metapod",
     image:"assets/img/011.png"},
     {name:"butterfree",
     image:"assets/img/012.png"},
     {name:"weedle",
     image:"assets/img/013.png"},
     {name:"kakuna",
     image:"assets/img/014.png"},
     {name:"beedrill",
     image:"assets/img/015.png"},
     {name:"pidgey",
     image:"assets/img/016.png"},
     {name:"pidgeotto",
     image:"assets/img/017.png"},
     {name:"pidgeot",
     image:"assets/img/018.png"},
     {name:"rattata",
     image:"assets/img/019.png"},
     {name:"raticate",
     image:"assets/img/020.png"}
];

//this is my timer function, it gets called every second by the "startTimer" function. It
//calls the wrongGuess function when the timer gets to 0.
var timer = function(){
        timerAmount -= 1;
        if(timerAmount >= 10){
        document.getElementById("timertext").innerHTML="0:"+timerAmount;
    }else{
        document.getElementById("timertext").innerHTML="0:0"+timerAmount;
    };
    if(timerAmount===0){
        wrongGuess();
    }
}

//this is the interval function that calls the timer, it gets called onload later(so it never stops)
var startTimer = function(){setInterval(timer, 1000)};

//this is the function I use to set the pokemon image, it pulls from the "pokemon" array of 
//objects. It is using the lenght of the array in it's equation, so as I add or remove
//objects, it will still work properly. 
var pokeChoice = function(){
    tempChoice = pokemon[Math.floor(Math.random() * (pokemon.length))];
    document.getElementById("mainImage").src=tempChoice.image;    
}
//these are the functions I use to play audio. I think they are HTML5 specific, if that's 
//a thing.
  function playCorrectGuess() {
        document.getElementById('rightchoiceaudio').play();
    }
 function playIncorrectGuess() {
        document.getElementById('wrongchoiceaudio').play();
    }
 function playWinGame() {
        document.getElementById('wingameaudio').play();
    }
 function playLoseGame() {
        document.getElementById('losegameaudio').play();
    }

//obvious.
window.onload = pokeChoice();
window.onload = startTimer(); 

//this is where I have my function for checking the input from player. This gets called
//by an eventlistener that I code later. It then calls the rightGuess or wrongGuess function,
//based on the input from the player. After running the right/wrongGuess function, it checks
//to see if the player has reached the end of the game (either winning or losing) and runs
//the endgame functions "winGame" or "loseGame" if appropriate.
var checkInput = function(){
    var playerInput = document.getElementById("guessInput").value;
    var fixedInput = playerInput.toLowerCase();
    if(fixedInput === tempChoice.name){
        rightGuess();
        if(correctTotal === 5){
            winGame();
        }
    }else{
        wrongGuess();
        if(livesLeft === 0){
            loseGame();
        }
    }
    clearTextInBox();
}


var rightGuess = function(){
    timerAmount = 16;
    playCorrectGuess(); 
    correctTotal ++;
    removeCurrentPokemonFromArray();
    if(correctTotal < 6){
        var image = document.getElementById("pokeball"+correctTotal.toString());
        image.src = "assets/img/pokeball.png";
        if(correctTotal < 5){
            pokeChoice();
        }
    }
}

var wrongGuess = function(){
    timerAmount = 16;
    playIncorrectGuess();
    var image = document.getElementById("sadicon"+livesLeft.toString());
    image.style.visibility = "hidden";
    livesLeft--;
    if(livesLeft > 0){
        pokeChoice();
    }
    clearTextInBox();
}

var winGame = function(){
    playWinGame();
    alert("You have become the very best, like no one ever was!");
    window.location.reload();
}

var loseGame = function(){
    playLoseGame();
    alert("You lose! Play more Red and Blue!");
    window.location.reload();
}

//this gets called by rightGuess(), and it splices out the current pokemon from the array,
//since we don't want to give them the same pokemon after they guess it correctly.
var removeCurrentPokemonFromArray = function(){
    var indexPosition = pokemon.indexOf(tempChoice);
    if (indexPosition > -1) {
    pokemon.splice(indexPosition, 1);
   }
}


//clears input text on our textbox, called by the checkInput function.
var clearTextInBox = function(){
    document.getElementById("guessInput").value="";
}

//Here, I listen for the input from the textbox, via a button, and run the checkInput function.
document.getElementById("Button").addEventListener("click", checkInput);