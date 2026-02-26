function showSurprise() {
    const surprise = document.getElementById("surprise");
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    surprise.style.display = "block";
    surprise.style.animation = "pop 0.6s ease";
}