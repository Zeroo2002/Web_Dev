// accessing all buttons
// DOM : document object model

function keypress(val){

    const result = document.getElementById('input');

    if(val == '='){
        result.value = eval(result.value);
    }
    else if(val == 'C'){
        result.value = "";
    }
    else if(val == 'D'){
        result.value = result.value.toString().slice(0, -1)
    }
    else{
        result.value += val;
    }

    console.log(val);
}






// Speak when clicked

let clear_button = document.getElementById('clear');
let button_1 = document.getElementById('_1');
let button_2 = document.getElementById('_2');
let button_3 = document.getElementById('_3');
let button_4 = document.getElementById('_4');
let button_5 = document.getElementById('_5');
let button_6 = document.getElementById('_6');
let button_7 = document.getElementById('_7');
let button_8 = document.getElementById('_8');
let button_9 = document.getElementById('_9');
let button_0 = document.getElementById('_0');
let button_plus = document.getElementById('plus');
let button_minus = document.getElementById('minus');
let button_prod = document.getElementById('prod');
let button_divide = document.getElementById('divide');
let button_mod = document.getElementById('mod');
let button_del = document.getElementById('del');
let button_result = document.getElementById('result');

function getVoices() {
    let voices = speechSynthesis.getVoices();
    if(!voices.length){
    // some time the voice will not be initialized so we can call speak with empty string
    // this will initialize the voices 
    let utterance = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);
    voices = speechSynthesis.getVoices();
    }
    return voices;
    }
    
    
function speak(text, voice, rate, pitch, volume) {
    // create a SpeechSynthesisUtterance to configure the how text to be spoken 
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = volume; // From 0 to 1
    speakData.rate = rate; // From 0.1 to 10
    speakData.pitch = pitch; // From 0 to 2
    speakData.text = text;
    speakData.lang = 'en';
    speakData.voice = voice;
    
    // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
    speechSynthesis.speak(speakData);
    }


// Sounds clear when 'C' button is pressed
clear_button.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'clear';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, volume = 1, pitch = 2;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds zero when '0' button is pressed
button_0.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'zero';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 2, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds one when '1' button is pressed
button_1.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'one';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 2, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds two when '2' button is pressed
button_2.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'two';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds three when '3' button is pressed
button_3.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'three';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds four when '4' button is pressed
button_4.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'four';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds five when '5' button is pressed
button_5.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'five';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds six when '6' button is pressed
button_6.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'six';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds seven when '7' button is pressed
button_7.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'seven';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds eight when '8' button is pressed
button_8.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'eight';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds nine when '9' button is pressed
button_9.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'nine';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});


// Sounds plus when '+' button is pressed
button_plus.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'plus';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds minus when '-' button is pressed
button_minus.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'minus';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds into when '*' button is pressed
button_prod.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'into';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds divided by when '/' button is pressed
button_divide.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'divided by';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds mod when '%' button is pressed
button_mod.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'mod';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds del when 'D' button is pressed
button_del.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {
        
        // Text to be spoken
        let text = 'delete';

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});

// Sounds equals when '=' button is pressed
button_result.addEventListener('click', function() {
    
        
    if ('speechSynthesis' in window) {

        const result = document.getElementById('input');

        // if()
        
        // Text to be spoken
        let text = 'equals'+ result.value;

        //voice of the utterance
        let voice = getVoices();

        // rate, pitch and volume of the voice
        let rate = 1.5, pitch = 1, volume = 1;

        //Speak
        speak(text, voice[0], rate, pitch, volume);
    }
    else{
        console.log(' Speech Synthesis Not Supported 😞'); 
        }
});