const EnglishMusic = [
    {
        id: 1,
        songName :"I Tried So Hard Linkin Park",
        ratings:4,
        singer : "Linkin Park",
        totalPlays:20000,
        url:'./musics/music1.mp3',
        description:"linking park, one of the best singers ,In The End - Linkin Park (With) music file uploaded on Aug 21st, 2008 by Liamuzumaki."
    },
    {
        id:2,
        songName :"I Tried So Hard Linkin Park",
        ratings:4,
        singer : "Linkin Park",
        totalPlays:20000,
        url:'./musics/music1.mp3',
        description:"linking park, one of the best singers ,In The End - Linkin Park (With) music file uploaded on Aug 21st, 2008 by Liamuzumaki."
    },
    {
        id:3,
        songName :"I Tried So Hard Linkin Park",
        ratings:4,
        singer : "Linkin Park",
        totalPlays:20000,
        url:'./musics/music1.mp3',
        description:"linking park, one of the best singers ,In The End - Linkin Park (With) music file uploaded on Aug 21st, 2008 by Liamuzumaki."
    },
    {
        id:4,
        songName :"I Tried So Hard Linkin Park",
        ratings:4,
        singer : "Linkin Park",
        totalPlays:20000,
        url:'./musics/music1.mp3',
        description:"linking park, one of the best singers ,In The End - Linkin Park (With) music file uploaded on Aug 21st, 2008 by Liamuzumaki."
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
    img.src = EnglishMusic[current].url;
    
    img.setAttribute("alt",`${EnglishMusic[current].songName}`);
    musicCard.appendChild(img);
    
    const musicDetail = document.createElement('div')
        .classList.add(music_details);
    
    const heading = document.createElement('h3').classList.add('music_heading');
    heading.innerText = EnglishMusic[current].songName;
    
    musicDetail.appendChild(heading);

    const achivements = document.createElement('span').classList.add(music_achivements);

    const ratings = document.createElement('span').classList.add('ratings');
    
    ratings.innerText = `"&#9733".${repeat(EnglishMusic[current].ratings)} + "&#9734".${repeat(5 - EnglishMusic[current].ratings)}`;
    
    achivements.appendChild(ratings);

    const singerName = document.createElement('span').classList.add('singer_name');
    
    singerName.innerText = `${EnglishMusic[current].singerName}`;
    singerName.innerText = achivements.appendChild(singerName);

}

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