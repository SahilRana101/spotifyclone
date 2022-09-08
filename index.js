const music = new Audio('legend.mp3');



const songs = [
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
        id:'15',
        songName:` Less than zero <br>
        <div class="subtitle">The Weeknd</div>`,
        poster:"images/zero.jpg"
    }
    
]
Array.from(document.getElementsByClassName('songItem')).forEach((element,i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

})


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
})


