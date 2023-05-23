const playBtn = document.querySelector('#playBtn')
const stopBtn = document.querySelector('#stopBtn')
const volumeBtn = document.querySelector('#volumeBtn')
const audio = document.querySelector('audio')

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#dde5ec',
    progressColor: '#03cebf',
    barWidth: 2,
    height: 90,
    responsive: true,
    hideScrollbar: true,
    barRadius: 2
});

wavesurfer.load('./audio/OPTokyo.mp3');

playBtn.addEventListener('click', () => {
    wavesurfer.playPause();

    if (playBtn.src.includes('play.png')) {
        playBtn.src = './img/pause.png';
        audio.play('audio');

    } else {
        playBtn.src = './img/play.png';
        audio.pause('audio');
    }
});

stopBtn.addEventListener('click', () => {
    wavesurfer.stop();
    playBtn.src = './img/play.png';
    audio.pause('audio');
});



volumeBtn.addEventListener('click', () => {

    wavesurfer.toggleMute();

    if (volumeBtn.src.includes('volume.png')) {
        volumeBtn.src = './img/mute.png';
        audio.pause('audio');
    } else {
        volumeBtn.src = './img/volume.png';
        audio.play('audio');
    }
});

wavesurfer.on('finish', function() {
    playBtn.src = './img/play.png';
    wavesurfer.stop();
});