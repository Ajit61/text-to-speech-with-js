const play=document.getElementById("play");
const clear=document.getElementById("clear");
const input=document.getElementById("input");
const pauseButton=document.getElementById("pause");
const speed=document.getElementById("speed");
let currentch;
play.addEventListener('click',()=>{
    playText(input.value)
})
speed.addEventListener('input', () => {
    // cleartext()
    playText(utterance.text.substring(currentCh))
  })
pauseButton.addEventListener('click', pauseText)

clear.addEventListener('click',cleartext)

function playText(text){
    const uttertance=new SpeechSynthesisUtterance(text)
    
  
uttertance.rate=speed.value ||1 ;
uttertance.addEventListener('boundary',e=>{
    currentch=e.charIndex
})
// uttertance.addEventListener('end',()=>{
// input.disabled=false})
// input.disabled=true;
speechSynthesis.speak(uttertance)
}

function pauseText(){
  if(speechSynthesis.speaking)  SpeechSynthesis.pause()

 
}

function cleartext(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}