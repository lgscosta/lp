// Função base 
function reload(){
    window.location.href = "index.html";
}

// Função base 
function oracle(){
    window.location.href = "oracle.html";
}

// Função base 
function audioPlay(){
    // Escolhe o audio que tocará de fundo
    var audio = new Audio('../snd/defeat.mp3');
    audio.volume = 0.1;
    audio.play();
    
    // Sweet Alert
    swal({
        title: "Defeat",
        text: "Oh no... It's okay...\nYou can try again or beg for help to The Oracle.\n\n\nClick out to exit.",
        buttons: false,  
        className: "bad-end"
    });
}