function reload(){
    window.location.href = "index.html";
}

function audioPlay(){
    var audio = new Audio('defeat.mp3');
    audio.volume = 0.1;
    audio.play();
    
    
    swal({
        title: "Defeat",
        text: "message",
        buttons: false,  
        className: "bad-end"
    });
}
