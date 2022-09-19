var count1 = 0;
var music_playlist = []
var ID = 0
var i = 0;


let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let curr_track = document.createElement('audio');
let player = document.getElementById("music");
let track_index = 0;
let updateTimer;
toggle(player);

var music_list = {
    1: ["Legend", "Sidhu Moosewala", 'songs/Legend.mp3', "images/1.jpeg"],
    2: ["Blinding Lights", "The Weeknd", 'songs/Blinding Lights.mp3', "images/weekndimg.jpg"],
    3: ["295", "Sidhu Moosewala", 'songs/295.mp3', "images/295.jpg"],
    4: ["Unforgettable", "Diljit Dosanjh", 'songs/Unforgettable.mp3', "images/unforgettable.jpg"],
    5: ["Sidhu Son", "Sidhu Moosewala", 'songs/Sidhu Son.mp3', "images/sidhuson.jpg"],
    6: ["Bewafa", "Imran Khan", 'songs/Bewafa.mp3', "images/bewafa.jpg"],
    7: ["Starboy", "The Weeknd", 'songs/Starboy.mp3', "images/starboy.jpg"],
    8: ["One Dance", "Drake", 'songs/One Dance.mp3', "images/onedance.jpg"],
    9: ["Bad Guy", "Billie Eilish", 'songs/Bad Guy.mp3', "images/badguy.jpg"],
    10: ["Brown Munde", "Ap Dhillon", 'songs/Brown Munde.mp3', "images/brownmunde.jpg"],
    11: ["Proper Patola", "Diljit Dosanjh", 'songs/Proper Patola.mp3', "images/proper.jpg"],
    12: ["440 Volt", "Diljit Dosanjh", 'songs/440 Volt.mp3', "images/440.jpg"],
    13: ["Mask Off", "Future", 'songs/Mask Off.mp3', "images/maskoff.jpg"],
    14: ["Less than zero", "The Weeknd", 'songs/Less than zero.mp3', "images/zero.jpg"]
}


function barPlayButton() {
    // bar_play_button to pause and play currently playing song.

    if (ID == 0) {
        newPlay(1);
        toggle(player);
    }

    else {
        if (isPlaying(curr_track)) {
            pause(ID);
            toggle(player);
            document.getElementById("play").className = "bi bi-play-fill";
            // incomplete
        }
        else {
            curr_track.play();
            toggle(player);
            document.getElementById(ID).className = "bi playlistPlay bi-pause-circle-fill";
            document.getElementById("play").className = "bi bi-pause-fill";
            if (ID == 2) {
                document.getElementById(15).innerHTML = "Pause";
            }
        }
    }
}


function playTheSong(id) {
    // playthesong - Play buttons' function to play and pause songs.

    if (ID == id) {
        if (count1 == 0) {
            pause(id);
            toggle(player);
            console.log("yes player1");
            count1 = 1;
        }
        else {
            curr_track.play();
            toggle(player);
            console.log("yes player2");
            document.getElementById(ID).className = "bi playlistPlay bi-pause-circle-fill";
            document.getElementById("play").className = "bi bi-pause-fill";

            if (ID == 2) document.getElementById(15).innerHTML = "Pause";
            count1 = 0;
        }

        changeImageTitleSubtitle(id);
        return;
    }
    else {
        if (ID == 0 || !isPlaying(curr_track)) {
            toggle(player);
            newPlay(id);
            count1 = 0;
        }
        else pauseAndPlay(id);
    }
}

function pause(id) {
    // pause function is to pause the currently playing song, if any.

    curr_track.pause();
    count1 = 1;
    document.getElementById("play").className = "bi bi-play-fill";
    document.getElementById(id).className = "bi playlistPlay bi-play-circle-fill";

    if (id == 2) document.getElementById(15).innerHTML = "Play";

    ID = id;
}


function newPlay(id) {
    // new_play function will play the song.

    console.log(music_list[id][2]);
    curr_track.src = music_list[id][2];
    curr_track.load();
    curr_track.play();
    updateTimer = setInterval(seekUpdate, 1000);
    document.getElementById(id).className = "bi playlistPlay bi-pause-circle-fill";
    document.getElementById("play").className = "bi bi-pause-fill";
    if (id == 2) document.getElementById(15).innerHTML = "Pause";
    changeImageTitleSubtitle(id);
    ID = id;
}


function pauseAndPlay(id) {
    // pause_and_play is to pause currently playing song, if any and play the other requested song.

    clearInterval(updateTimer);
    resetValues();
    curr_track.pause();
    document.getElementById("play").className = "bi bi-play-fill";
    console.log(music_list[id][2]);
    curr_track.src = music_list[id][2];
    curr_track.load();
    curr_track.play();
    updateTimer = setInterval(seekUpdate, 1000);

    document.getElementById("play").className = "bi bi-pause-fill";
    document.getElementById(ID).className = "bi playlistPlay bi-play-circle-fill";
    document.getElementById(id).className = "bi playlistPlay bi-pause-circle-fill";

    if (ID == 2) document.getElementById(15).innerHTML = "Play";
    if (id == 2) document.getElementById(15).innerHTML = "Pause";
    changeImageTitleSubtitle(id);
    ID = id;
}


function playNextSong() {
    // play next song in the list.
    if (!isPlaying(curr_track)) toggle(player);
    if (ID == 0) {
        ID = 1;
    } else if (ID == 14) {
        pause(ID);
        ID = 1;
    } else {
        pause(ID);
        ID++;
    }

    newPlay(ID);
}


function playPreviousSong() {
    // play previous song in the list.
    if (!isPlaying(curr_track)) toggle(player);
    if (ID == 0) {
        ID = 14;
    } else if (ID == 1) {
        pause(ID);
        ID = 14;
    } else {
        pause(ID);
        ID--;
    }

    newPlay(ID);
}


function changeImageTitleSubtitle(song_id) {
    // Change song title, image and name of singer on the bar.

    document.getElementById("title").innerHTML = music_list[song_id][0];
    document.getElementById("poster_play").src = music_list[song_id][3];
    document.getElementById("16").textContent = music_list[song_id][1];
}


function isPlaying(song) { return !song.paused; }


document.body.onkeyup = function (e) {
    // On spacebar press : pause/play

    if (e.keyCode == 32) {
        barPlayButton();
    }
}


function resetValues() {
    // Function to reset all values to their default

    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}


function seekTo() {
    // Set the current track position to the calculated seek position

    seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}


function setVolume() {
    // Set the volume according to the percentage of the volume slider set
    curr_track.volume = volume_slider.value / 100;
}


function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        // Time left and total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        // Adding zero's to time
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        // Update duration
        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

function toggle(player) {
    player.classList.toggle("paused");
}