function reload(){
    window.location.href = "index.html";
}

function audioPlay(){
    var audio = new Audio('victory.mp3');
    audio.volume = 0.1;
    audio.play();
    
    
    swal({
        title: "Victory",
        text: "message",
        buttons: false,  
        className: "good-end"
    });
}