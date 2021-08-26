function reload(){
    window.location.href = "index.html";
}

function oracle(){
    window.location.href = "oracle.html";
}

function audioPlay(){
    var audio = new Audio('defeat.mp3');
    audio.volume = 0.1;
    audio.play();
    
    
    swal({
        title: "Defeat",
        text: "Oh no... It's okay...\nYou can try again or beg for help to The Oracle.\n\n\nClick out to exit.",
        buttons: false,  
        className: "bad-end"
    });
}