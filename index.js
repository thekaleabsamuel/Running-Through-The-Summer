function createSongElement(song) {
    const songContainer = document.createElement("div");
    songContainer.classList.add("song");

    // Title
    const title = document.createElement("p");
    title.textContent = song.Title;

    // Features
    const features = document.createElement("p");
    features.textContent = `Featuring ${song.Features}`;

    // Producers
    const producers = document.createElement("p");
    producers.textContent = `Produced by ${song.Producers}`;

    // Image
    const image = document.createElement("img");
    image.src = song.Image;
    image.alt = song.Title;

    // MP3
    const audio = document.createElement("audio");
    audio.controls = true;
    const source = document.createElement("source");
    source.src = song.MP3;
    source.type = "audio/mpeg";
    audio.appendChild(source);

    // Append elements to song container
    songContainer.appendChild(title);
    songContainer.appendChild(features);
    songContainer.appendChild(producers);
    songContainer.appendChild(image);
    songContainer.appendChild(audio);

    return songContainer;
}

function appendSongs(songs) {
    const container = document.createElement("div");
    container.classList.add("songs-container");

    songs.forEach(song => {
        const songElement = createSongElement(song);
        container.appendChild(songElement);
    });

    document.body.appendChild(container);
}

const songs = [
  
    {
        "Title": "01. My Side Of The City",
        "Features": "DeColo & j4zz_Un1t",
        "Producers":"Kaleab Samuel & J4zz_Un1t",
        "Image": "https://m.media-amazon.com/images/I/41UzOktTCSL._UXNaN_FMjpg_QL85_.jpg",
        "MP3": "https://dl.sndup.net/jhk3/01%20My%20Side%20Of%20The%20City.mp3"
        
    },
    {
        "Title": "02. Get Down",
        "Features": "Estephanyart & Paige Savahn",
        "Producers": "Fa$hion Killa",
        "Image": "https://m.media-amazon.com/images/I/41UzOktTCSL._UXNaN_FMjpg_QL85_.jpg",
        "MP3": "https://dl.sndup.net/r5bd/02%20Get%20Down.mp3"
    },
    {
        "Title": "03. Rollin Remix",
        "Features": "Reezy Keys",
        "Producers":"Reezy Keys & Kaleab Samuel",
        "Image": "https://m.media-amazon.com/images/I/41UzOktTCSL._UXNaN_FMjpg_QL85_.jpg",
        "MP3": "https://dl.sndup.net/bh47/03%20Rollin%20Remix.mp3"
    },
    {
        "Title": "04. Stylin So Bossy ",
        "Features": "pig$",
        "Producers": "pig$",
        "Image": "https://m.media-amazon.com/images/I/41UzOktTCSL._UXNaN_FMjpg_QL85_.jpg",
        "MP3": "https://dl.sndup.net/ffjs/04%20Stylin%20So%20Bossy.mp3"
    },
    {
        "Title": "05. Prettiest Girls Live In Denver",
        "Features": "Chico Mcgee, DNA Picasso & Nasiya",
        "Producers": "7names, Reezy Keys & Kaleab Samuel",
        "Image": "https://m.media-amazon.com/images/I/41UzOktTCSL._UXNaN_FMjpg_QL85_.jpg",
        "MP3": "https://dl.sndup.net/kdt4/05%20Prettiest%20Girls%20Live%20In%20Denver.mp3"
    },
    {
        "Title": "06. Red Thread",
        "Features": "DeEtta Jain",
        "Producers": "Reezy Keys",
        "Image": "https://m.media-amazon.com/images/I/41UzOktTCSL._UXNaN_FMjpg_QL85_.jpg",
        "MP3": "https://dl.sndup.net/tptf/06%20Red%20Thread.mp3"
    },
    {
        "Title": "07.Ultraviolet",
        "Features": "Jonni Blvnts & Jkwon",
        "Producers": "Jkwon",
        "Image": "https://m.media-amazon.com/images/I/41UzOktTCSL._UXNaN_FMjpg_QL85_.jpg",
        "MP3": "https://dl.sndup.net/mwsj/07%20Ultraviolet.mp3"
    },
    {
        "Title": "08. Aco 2 La",
        "Features": "Chico Mcgee & Nasiya",
        "Producers": "Reezy Keys, AB, Landon",
        "Image": "https://m.media-amazon.com/images/I/41UzOktTCSL._UXNaN_FMjpg_QL85_.jpg",
        "MP3": "https://dl.sndup.net/xcj6/08%20Aco%202%20La.mp3"
    },
    {
        "Title": "09. Different",
        "Features": "VortexFM",
        "Producers": "Reezy Keys",
        "Image": "https://m.media-amazon.com/images/I/41UzOktTCSL._UXNaN_FMjpg_QL85_.jpg",
        "MP3": "https://dl.sndup.net/fjk3/09%20Different.mp3"
    },
    {
        "Title": "10. Hometown Hero",
        "Features": "",
        "Producers": "Reezy Keys & Landon",
        "Image": "https://m.media-amazon.com/images/I/41UzOktTCSL._UXNaN_FMjpg_QL85_.jpg",
        "MP3": "https://dl.sndup.net/dbym/10%20Hometown%20Hero.mp3"
    },
    
]

appendSongs(songs);

