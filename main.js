x = 0;
y = 0;

to_num=Number(content);
draw_apple = "";
apple="apple.png";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    
    if(Number.isInteger(to_num)){
     
      document.getElementById("status").innerHTML="Started drawing apple";
      draw_apple="set";
    }
    else{
    document.getElementById('status').innerHTML="Number not recognised";
    draw_apple='';
    }
}

function setup() {
 canvas=createCanvas(900,500);
}

function draw() {
  if(draw_apple == "set")
  {
    for(i=1;i<=to_num;i++){
      x=Math.floor(Math.random()*900);
      y=Math.floor(Math.random()*500);
      image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_num + " Apples drawn";
    draw_apple = "";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
