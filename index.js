var count1 = 0;
var music_playlist = []
var ID = 0

var music_list = {
    1:["Legend","Sidhu Moosewala", 'songs/Legend.mp3', "images/1.jpeg"],
    2:["Blinding Lights","The Weeknd", 'songs/Blinding Lights.mp3', "images/weekndimg.jpeg"],
    3:["295","Sidhu Moosewala", 'songs/295.mp3', "images/295.jpeg"],
    4:["Unforgettable","Diljit Dosanjh", 'songs/Unforgettable.mp3', "images/unforgettable.jpeg"],
    5:["Sidhu Son","Sidhu Moosewala", 'songs/Sidhu Son.mp3', "images/sidhuson.jpeg"],
    6:["Bewafa","Imran Khan", 'songs/Bewafa.mp3', "images/bewafa.jpeg"],
    7:["Starboy","The Weeknd", 'songs/Starboy.mp3', "images/starboy.jpeg"],
    8:["One Dance","Drake", 'songs/One Dance.mp3', "images/onedance.jpeg"],
    9:["Bad Guy","Billie Eilish", 'songs/Bad Guy.mp3', "images/badguy.jpeg"],
    10:["Brown Munde","Ap Dhillon", 'songs/Brown Munde.mp3', "images/brownmunde.jpeg"],
    11:["Proper Patola","Diljit Dosanjh", 'songs/Proper Patola.mp3', "images/proper.jpeg"],
    12:["440 Volt","Diljit Dosanjh", 'songs/440 Volt.mp3', "images/440.jpeg"],
    13:["Mask Off","Future", 'songs/Mask Off.mp3', "images/maskoff.jpeg"],
    14:["Less than zero","The Weeknd", 'songs/Less than zero.mp3', "images/zero.jpeg"]
}


function barPlayButton(){
    // bar_play_button to pause and play currently playing song.

    if (music_playlist.length == 0){
        newPlay(1);
    }

    else{
        if (isPlaying(music_playlist[0])){
            pause(ID);
            document.getElementById("play").className = "bi bi-play-fill";
        }
        else{
            music_playlist[0].play();
            document.getElementById(ID).className = "bi playlistPlay bi-pause-circle-fill";
            document.getElementById("play").className = "bi bi-pause-fill";
            if (ID == 2){
                document.getElementById(15).innerHTML = "Pause";
            }
        }
    }
}


function playTheSong(id){
    // playthesong - Play buttons' function to play and pause songs.

    if (ID == id){
        if (count1 == 0){
            pause(id);
            count1 = 1
            console.log("1  "+id + "  " + ID + "  " + music_list[id-1]);
        }
        else{
            music_playlist[0].play();
            document.getElementById(ID).className = "bi playlistPlay bi-pause-circle-fill";
            document.getElementById("play").className = "bi bi-pause-fill";
            if (ID == 2){
                document.getElementById(15).innerHTML = "Pause";
            }

            count1 = 0;
        }
        changeImageTitleSubtitle(id);
        return;
    }

    if (ID == 0) newPlay(id);
    else pauseAndPlay(id, ID);

    console.log("2  " + id + "  " + ID + "  " + music_list[id][2]);
}


function pause(id){
    // pause function is to pause the currently playing song, if any.

    music_playlist[0].pause();
    document.getElementById("play").className = "bi bi-play-fill";
    document.getElementById(id).className = "bi playlistPlay bi-play-circle-fill";

    if (id == 2) document.getElementById(15).innerHTML = "Play";

    ID = id;
}


function newPlay(id){
    // new_play function will play the song.

    const music = new Audio(music_list[id][2]);
    music_playlist.unshift(music);
    console.log(music_list[id][2]);
    music.play();
    music.loop =true;

    document.getElementById(id).className = "bi playlistPlay bi-pause-circle-fill";
    document.getElementById("play").className = "bi bi-pause-fill";
    if (id == 2) document.getElementById(15).innerHTML = "Pause";
    changeImageTitleSubtitle(id);
    ID = id;
}


function pauseAndPlay(id){
    // pause_and_play is to pause currently playing song, if any and play the other requested song.

    music_playlist[0].pause();
    document.getElementById("play").className = "bi bi-play-fill";
    music_playlist.shift(0);
    const music = new Audio(music_list[id][2]);
    music_playlist.unshift(music);
    console.log(music_list[id][2]);
    music.play();
    music.loop =true;

    document.getElementById("play").className = "bi bi-pause-fill";
    document.getElementById(ID).className = "bi playlistPlay bi-play-circle-fill";
    document.getElementById(id).className = "bi playlistPlay bi-pause-circle-fill";

    if (ID == 2) document.getElementById(15).innerHTML = "Play";
    if (id == 2) document.getElementById(15).innerHTML = "Pause";
    changeImageTitleSubtitle(id);
    ID = id;
}


function playNextSong(){
    if (ID == 0){
        ID = 1;
    }else if (ID == 14){
        pause(ID);
        ID = 1;
        music_playlist.shift(0);
    }else {
        pause(ID);
        ID++;
        music_playlist.shift(0);
    }

    newPlay(ID);
}


function playPreviousSong(){
    if (ID == 0){
        ID = 14;
    }else if (ID == 1){
        pause(ID);
        ID = 14;
        music_playlist.shift(0);
    }else {
        pause(ID);
        ID--;
        music_playlist.shift(0);
    }

    newPlay(ID);
}


function changeImageTitleSubtitle(song_id){
    document.getElementById("title").innerHTML = music_list[song_id][0];
    document.getElementById("poster_play").src = music_list[song_id][3];
    document.getElementById("16").textContent = music_list[song_id][1];
}


function isPlaying(song) { return !song.paused; }
