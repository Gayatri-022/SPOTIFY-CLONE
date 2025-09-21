function playAll(songNumber) {
    var audioElement = document.getElementById("song");
    var playBtn = document.getElementById("play-pause");
    var songFileName = "music/" + songNumber + ".mp3";
    var currentRow=document.getElementById("song"+songNumber);

    if (audioElement.getAttribute("src") === songFileName && !audioElement.paused) {
        // Pause if same song is playing
        audioElement.pause();
        playBtn.innerHTML = '<img class="play-button" src="images/play.jpg" alt="play">';
        currentRow.classList.remove("highlight");
    } else {
        // Play new song
        audioElement.setAttribute("src", songFileName);
        audioElement.play();
        playBtn.innerHTML = '<img class="play-button" src="images/pause.jpg" alt="pause">';
        currentRow.classList.add("highlight");
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML = '<img class="play-button" src="images/pause.jpg" alt="pause">';
    }
    else{
        audio.pause();
        playBtn.innerHTML = '<img class="play-button" src="images/play.jpg" alt="pause">';
        
    }
}