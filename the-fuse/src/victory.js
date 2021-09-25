function reload(){
    window.location.href = "index.html";
}

function audioPlay(){
    var audio = new Audio('../snd/victory.mp3');
    audio.volume = 0.1;
    audio.play();
    
    
    swal({
        title: "Victory!",
        text: "Congratulations, The Oracle is very proud of you.\nHere: take an odara.\n\n\nClick out to exit.",
        buttons: false,  
        className: "good-end"
    });
}