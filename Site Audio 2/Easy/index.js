const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title: "Kimestu No Yaiba",
    artist: "Go Shiina",
    cover: "Files/1PrimeiraImagemDemonSlayer.png",
    file: "Files/1KimestuNoYaiba.mp3"
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;
audio.src = data.file;