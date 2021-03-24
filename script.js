//Global constants
const holdTime = 500; //miliseconds
const pauseTime = 300;
const nextClueWaitTime = 1000;
//randomizer constants
const min = 3;
const max = 6;

//Global vars
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var lives = 0;

function startGame()
{
  gamePlaying = true;
  progress = 0;
  lives = 3;
  //hide start btn unhide stop btn
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randomizer();
  playClueSequence();
}


function stopGame()
{
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function randomizer()
{
  //randomizing number of tiles to press
  let num = Math.floor(Math.random()*(max-min))+min;
  console.log("num tiles:"+ num);
  //randomizing which tiles to press
  for (let i=0; i<=num; i++)
  {
    pattern[i] = Math.floor(Math.random()*(5-1))+1; //max 4 min 1
  }
  console.log(pattern);
}

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 520
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//lightButton(3);
//playSingleClue(3);

function lightButton(btn){
   document.getElementById("button"+btn).classList.add("lit")
}

//lit up when user guessed correctly
function lightButtonGreen(btn) {
    document.getElementById("button"+btn).classList.add("green")
}

function unlightButtonGreen(btn){
  document.getElementById("button"+btn).classList.remove("green")
}

function clearButton(btn) {
   document.getElementById("button"+btn).classList.remove("lit")
}

//for clue playing
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,holdTime);
    setTimeout(clearButton,holdTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += holdTime 
    delay += pauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  //if guess is wrong
  if (btn != pattern[guessCounter])
    {
      if(lives==0)
      loseGame();
      else
        lives--;
    }
  
  //if the turn is not over
  else if(guessCounter!=progress)
    {
      guessCounter++;  
    }
  
  //if its not a last turn
   else if(progress != pattern.length-1)
    {
      progress++;
      playClueSequence();
    }
  else
    winGame();
    
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}