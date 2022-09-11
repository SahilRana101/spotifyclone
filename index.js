var count1 = 0;
var music_playlist = []
var ID = 0

var music_list = ['songs/Legend.mp3','songs/Blinding Lights.mp3','songs/295.mp3','songs/Unforgettable.mp3',
'songs/Sidhu Son.mp3','songs/Bewafa.mp3','songs/Starboy.mp3','songs/One Dance.mp3',
'songs/Bad Guy.mp3','songs/Brown Munde.mp3','songs/Proper Patola.mp3','songs/440 Volt.mp3',
'songs/Mask Off.mp3','songs/Less than zero.mp3'];


function bar_play_button(){
    if (music_playlist.length == 0){
        new_play(1);
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


function playthesong(id){
    // Play buttons function to play and pause songs.
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
        return;
    }
    if (ID == 0){
        new_play(id);
    }
    else{
        pause_and_play(id, ID);
    }
    console.log("2  " + id + "  " + ID + "  " + music_list[id-1]);
}


function pause(id){
    // pause function is to pause the currently playing song.
    music_playlist[0].pause();
    document.getElementById("play").className = "bi bi-play-fill";
    document.getElementById(id).className = "bi playlistPlay bi-play-circle-fill";
    if (id == 2){
            document.getElementById(15).innerHTML = "Play";
    }
    ID = id;
}


function new_play(id){
    // new_play function will play the song.
    const music = new Audio(music_list[id-1]);
    music_playlist.unshift(music);
    console.log(music_list[id-1]);
    music.play();
    music.loop =true;
    document.getElementById(id).className = "bi playlistPlay bi-pause-circle-fill";
    document.getElementById("play").className = "bi bi-pause-fill";
    if (id == 2){
        document.getElementById(15).innerHTML = "Pause";
    }
    ID = id;
}


function pause_and_play(id){
    music_playlist[0].pause();
    document.getElementById("play").className = "bi bi-play-fill";
    music_playlist.shift(0);
    const music = new Audio(music_list[id-1]);
    music_playlist.unshift(music);
    console.log(music_list[id-1]);
    music.play();
    document.getElementById("play").className = "bi bi-pause-fill";
    music.loop =true;
    document.getElementById(ID).className = "bi playlistPlay bi-play-circle-fill";
    document.getElementById(id).className = "bi playlistPlay bi-pause-circle-fill";
    if (ID == 2){
        document.getElementById(15).innerHTML = "Play";
    }
    if (id == 2){
        document.getElementById(15).innerHTML = "Pause";
    }
    ID = id;
}


function play_next_song(){
    if (ID == 0){
        ID = 1;
    }else if (ID == 15){
        pause(ID);
        ID = 1;
        music_playlist.shift(0);
    }else {
        pause(ID);
        ID++;
        music_playlist.shift(0);
    }
    new_play(ID);
}


function play_previous_song(){
    if (ID == 0){
        ID = 15;
    }else if (ID == 1){
        pause(ID);
        ID = 15;
        music_playlist.shift(0);
    }else {
        pause(ID);
        ID--;
        music_playlist.shift(0);
    }
    new_play(ID);
}


function isPlaying(song) { return !song.paused; }


/*const songs = [
    {
        id:'1',
        songName:` legend <br>
        <div class="subtitle">Sidhu moosewala</div>`,
        poster:"images/1.jpeg"

    },
    {
        id:'2',
        songName:` Blindings Light <br>
        <div class="subtitle">The Weeknd</div>`,
        poster:"images/weekndimg.jpg"

    },
    {
        id:'3',
        songName:` 295 <br>
        <div class="subtitle">Sidhu Moosewala</div>`,
        poster:"images/295.jpg"

    },
    {
        id:'4',
        songName:` Unforgettable <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:"images/unforgettable.jpg"
    },
    {
        id:'5',
        songName:` Sidhu Son<br>
        <div class="subtitle">Sidhu Moosewala</div>`,
        poster:"images/sidhuson.jpg"
    },
    {
        id:'6',
        songName:` Bewafa <br>
        <div class="subtitle">Imran khan</div>`,
        poster:"images/bewafa.jpg"
    },
    {
        id:'7',
        songName:` Starboy <br>
        <div class="subtitle">The Weeknd</div>`,
        poster:"images/starboy.jpg"
    },
    {
        id:'8',
        songName:` one dance <br>
        <div class="subtitle">Drake</div>`,
        poster:"images/onedance.jpg"
    },
    {
        id:'9',
        songName:` Bad Guy <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:"images/badguy.jpg"
    },
    {
        id:'10',
        songName:` Brown Munde <br>
        <div class="subtitle">Ap Dhillon</div>`,
        poster:"images/brownmunde.jpg"
    },
    {
        id:'11',
        songName:` Proper Patola <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:"images/proper.jpg"
    },
    {
        id:'12',
        songName:` 440 volt <br>
        <div class="subtitle">Mika singh</div>`,
        poster:"images/440.jpg"
    },
    {
        id:'13',
        songName:` Mask Off <br>
        <div class="subtitle">Future</div>`,
        poster:"images/maskoff.jpg"
    },
    {
        id:'14',
        songName:` Less than zero <br>
        <div class="subtitle">The Weeknd</div>`,
        poster:"images/zero.jpg"
    }
    
]
    Array.from(document.getElementsByClassName('songItem')).forEach((element,i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

})*/

/*
let play = document.getElementById('play');

play.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        play.classList.remove('bi-play-fill');
        play.classList.add('bi-pause-fill');
    } else{
        music.pause();
        play.classList.add('bi-play-fill');
        play.classList.remove('bi-pause-fill');
    }
})*/


