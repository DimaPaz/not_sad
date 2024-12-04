document.getElementById("animateBtn").addEventListener("click", function () {
    const heartContainer = document.getElementById("heartContainer");
    const videoContainer = document.getElementById("videoContainer");
    const youtubeVideo = document.getElementById("youtubeVideo");

    // Show the heart animation
    heartContainer.classList.remove("hidden");

    // Wait for animation to complete (1.5s based on CSS)
    setTimeout(() => {
        heartContainer.classList.add("hidden");

        // Show the YouTube video
        youtubeVideo.src = "https://www.youtube.com/embed/7fup-Ik5trU?autoplay=1"; // Replace with your video link
        videoContainer.classList.remove("hidden");
    }, 3500);
});
