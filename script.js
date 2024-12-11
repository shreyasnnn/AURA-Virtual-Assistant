let btn = document.getElementById("btn")
let content = document.getElementById("content")
let voice = document.getElementById("voice")


//making it to speak by passing text
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "en-GB"
    window.speechSynthesis.speak(text_speak)
}

//decide what to wish(gm / gn)
function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    console.log(hours)
    if (hours >= 0 && hours < 12) {
        speak("good morning")
    } else if(hours >= 12 && hours < 16) {
        speak("Good Afternoon");
    } else {
        speak("Good Evening");
    }
}
// wishing when window loads at starting
window.addEventListener('load',()=>{
    wishMe();
} )

//speech recognition by user
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript // to access the spoken text
    content.innerText = transcript       //spoken text will appear on btn
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", ()=>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

//Make it intelligent
function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"


    if(message.includes("hello")){
        speak("hello, How can i help You")
    }
    else if(message.includes("hello")){
        speak("hello, How can i help You")
    }

    else if(message.includes("namaste")){
        speak("namaste, How can i help You")
    }

    else if(message.includes("who are you")){
        speak("I am AURA, A virtual assistant, created by Shreyas Sir")
    }

    //for websites
    else if(message.includes("open youtube")){
        speak("opening youtube for you")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google for you")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook for you")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram for you")
        window.open("https://www.instagram.com","_blank")
    }
    //for apps
    else if(message.includes("open calculator")){
        speak("opening calculator for you")
        window.open("calculator://")
    }

    else if(message.includes("open whatsapp")){
        speak("opening whatsapp for you")
        window.open("whatsapp://")
    }

    else if(message.includes("time")){
        let time = new Date().toLocaleTimeString(undefined, {hour:"numeric",minute:"numeric",second:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date = new Day().toLocaleString(undefined, {day:"numeric",month:"short"})
        speak(date)
    }

    else {
        //removing aura from text/message
        message = message.replace("aura","")
        message = message.replace("what is","")
        speak(`This is what i found on internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}