const translations = document.querySelectorAll("[data-en][data-ta]");
const langToggle = document.getElementById("langToggle");
let language = "en";
langToggle.addEventListener("click", () => {
  language = language === "en" ? "ta" : "en";
  document.body.classList.toggle("tamil", language === "ta");
  translations.forEach(el => { el.textContent = el.dataset[language]; });
  langToggle.textContent = language === "en" ? "தமிழ்" : "English";
  document.documentElement.lang = language === "en" ? "en" : "ta";
});

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "Pause music";
      musicToggle.setAttribute("aria-label", "Pause music");
    } catch (e) {
      musicLabel.textContent = "Add audio file";
      alert("Add your instrumental MP3 as assets/audio/your-romantic-instrumental.mp3, then try again.");
    }
  } else {
    music.pause();
    musicLabel.textContent = "Play music";
    musicToggle.setAttribute("aria-label", "Play music");
  }
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".site-header nav").classList.toggle("open");
});
document.querySelectorAll(".site-header nav a").forEach(a => a.addEventListener("click", () => {
  document.querySelector(".site-header nav").classList.remove("open");
}));
