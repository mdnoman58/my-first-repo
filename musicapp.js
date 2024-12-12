const playPauseButton = document.getElementById("play-pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const audioPlayer = document.getElementById("audio-player");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const playlist = document.getElementById("playlist");

const songs = [
    { title: "Song 1", artist: "Artist 1", src: "music/song1.mp3" },
    { title: "Song 2", artist: "Artist 2", src: "music/song2.mp3" },
    { title: "Song 3", artist: "Artist 3", src: "music/song3.mp3" },
 
];

let currentSongIndex = 0;

// Update track details
function updateTrack() {
    const currentSong = songs[currentSongIndex];
    trackTitle.textContent = currentSong.title;
    trackArtist.textContent = currentSong.artist;
    audioPlayer.src = currentSong.src;
}

// Play or pause the song
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = "Play";
    }
}

// Play the previous song
function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateTrack();
    audioPlayer.play();
    playPauseButton.textContent = "Pause";
}

// Play the next song
function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateTrack();
    audioPlayer.play();
    playPauseButton.textContent = "Pause";
}

// Handle playlist item click
function playSongFromPlaylist(event) {
    if (event.target.classList.contains('song')) {
        currentSongIndex = parseInt(event.target.getAttribute('data-index'));
        updateTrack();
        audioPlayer.play();
        playPauseButton.textContent = "Pause";
    }
}

// Initialize the app
function initializeApp() {
    updateTrack();
    playPauseButton.addEventListener("click", togglePlayPause);
    prevButton.addEventListener("click", playPrev);
    nextButton.addEventListener("click", playNext);
    playlist.addEventListener("click", playSongFromPlaylist);
}

initializeApp();
