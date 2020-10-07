const EnglishMusic = [
    {
        id: 1,
        songName :"I Tried So Hard Linkin Park",
        ratings:4,
        singer : "Linkin Park",
        totalPlays:20000,
        url:'./src/Linkin Park - In The End.mp3',
        imageUrl:'./src/img1.jpg',
        musicUmageUrl:'./src/ima1.jpg',
        description:"linking park, one of the best singers ,In The End - Linkin Park"
    },
    {
        id:2,
        songName :"I Tried So Hard Linkin Park",
        ratings:4,
        singer : "Linkin Park",
        totalPlays:20000,
        imageUrl:'./src/img1.jpg',
        musicUrl:'./src/Linkin Park - In The End.mp3',
        description:"linking park, one of the best singers ,In The End - Linkin Park"
    },
    {
        id:3,
        songName :"I Tried So Hard Linkin Park",
        ratings:4,
        singer : "Linkin Park",
        totalPlays:20000,
        imageUrl:'./src/img1.jpg',
        musicUrl:'./src/Linkin Park - In The End.mp3',
        description:"linking park, one of the best singers ,In The End - Linkin Park"
    },
    {
        id:4,
        songName :"I Tried So Hard Linkin Park",
        ratings:4,
        singer : "Linkin Park",
        totalPlays:20000,
        imageUrl:'./src/img1.jpg',
        musicUrl:'./src/Linkin Park - In The End.mp3',
        description:"linking park, one of the best singers ,In The End - Linkin Park"
    }

]
console.log(EnglishMusic);

//Search bar background color on typing something
const searchInput = document.querySelector('#searchInput');
searchInput.keyup = () =>{

}

const musicList = document.querySelector('.musci_list');
let current = 0;
const addSongToList = ()=>{
    const musicCard = document.createElement('div');
    musicCard.classList.add('music_card');

    const img = document.createElement('img');
    img.src = EnglishMusic[current].imageUrl;
    
    img.setAttribute("alt",`${EnglishMusic[current].songName}`);
    musicCard.appendChild(img);
    
    const musicDetail = document.createElement('div');
    musicDetail.classList.add('music_details');
    
    const heading = document.createElement('h3');
    heading.classList.add('music_heading');
    heading.innerText = EnglishMusic[current].songName;
    
    musicDetail.appendChild(heading);

    const achivements = document.createElement('span');
    achivements.classList.add('music_achivements');

    const ratings = document.createElement('span');
    ratings.classList.add('ratings');
    let a = "%";
    
    
    ratings.innerHTML = `${'&#9733'.repeat(EnglishMusic[current].ratings)} + ${"&#9734".repeat((5 - EnglishMusic[current].ratings))}`;

    
    
    achivements.appendChild(ratings);

    const singerName = document.createElement('span');
    singerName.classList.add('singer_name');
    
    singerName.innerHTML = `<i class="fas fa-user"></i> ${EnglishMusic[current].singer}`;
    achivements.appendChild(singerName);

    const publishedYear = document.createElement('span');
    publishedYear.classList.add('published_year');
    publishedYear.innerText = `${Math.floor(Math.random()*10)} year ago`;
    achivements.appendChild(publishedYear);

    const playedTimes = document.createElement('span');
    playedTimes.classList.add('played-times');
    playedTimes.innerHTML = `<i class="fas fa-play"></i>83.4k</span>`;
    achivements.appendChild(playedTimes);

    musicDetail.appendChild(achivements);

    const music_description = document.createElement('p');
    music_description.classList.add('music_description');
    music_description.innerText = `${EnglishMusic[current].description}`;
    musicDetail.appendChild(music_description);

    const ctrlBtns = document.createElement('div');
    ctrlBtns.classList.add('control_btns');

    ctrlBtns.innerHTML = `
                            <span id="playBtn" onClick="javascript:playSong()">
                                Play
                            </span>
                            <span id="pauseBtn" onClick="javascript:pauseSong()">
                                Pause
                            </span>
                            <span class="share">
                                <i class="fas fa-share"></i>
                            </span>
    `
    musicDetail.appendChild(ctrlBtns);
    musicCard.appendChild(musicDetail);
    musicList.appendChild(musicCard);
    console.log(musicCard);
}

addSongToList();
addSongToList();
addSongToList();
addSongToList();
addSongToList();
addSongToList();
addSongToList();
addSongToList();
function addToCurrentMusic(){
    
}
const range = document.querySelector('.hp_range');
const player = document.querySelector('#audio_player');

const playSong = ()=>{
    range.parentElement.classList.add('playing');
    player.play();
}
const pauseSong = ()=>{
    const player = document.querySelector('#audio_player');
    player.pause();
}
  
player.addEventListener("timeupdate", function() {
    var currentTime = player.currentTime;
    var duration = player.duration;
    range.stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
});