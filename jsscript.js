const button = document.getElementById("record");
const titleEL = document.getElementById("title");
const message = document.getElementById('message');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let recording = false
recognition.lang = 'fr-FR'
recognition.continuous = true
button.onclick = () =>{
    recording = !recording;
    if(recording){
        recognition.start()
        button.innerText = 'stop'
    }
    else{
        recognition.stop()
        button.innerText = 'record'
    }
}

recognition.onresult = (e) =>{
    let result = e.results[0][0].transcript;
    message.innerText += result
}