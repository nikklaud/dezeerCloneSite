let isPlaying = false;
    const playBtn = document.getElementById('play-btn');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');

    function playMusic(title, artist) {
        trackTitle.textContent = title;
        trackArtist.textContent = artist;
        isPlaying = true;
        playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }

    function togglePlay() {
        isPlaying = !isPlaying;
        playBtn.innerHTML = isPlaying ? '<i class="bi bi-pause-fill"></i>' : '<i class="bi bi-play-fill"></i>';
    }

    function skipBackward() {
        console.log("Skipped backward");
    }

    function skipForward() {
        console.log("Skipped forward");
    }