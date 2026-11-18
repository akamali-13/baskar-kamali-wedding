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


// Live countdown to midnight IST on the wedding date. Ceremony time can be added later.
const weddingDate = new Date("2027-02-10T06:30:00+05:30").getTime();
const countdownParts = {days:document.getElementById("countDays"),hours:document.getElementById("countHours"),minutes:document.getElementById("countMinutes"),seconds:document.getElementById("countSeconds")};
function updateCountdown(){
 const remaining=Math.max(0,weddingDate-Date.now());
 countdownParts.days.textContent=String(Math.floor(remaining/86400000)).padStart(3,"0");
 countdownParts.hours.textContent=String(Math.floor(remaining%86400000/3600000)).padStart(2,"0");
 countdownParts.minutes.textContent=String(Math.floor(remaining%3600000/60000)).padStart(2,"0");
 countdownParts.seconds.textContent=String(Math.floor(remaining%60000/1000)).padStart(2,"0");
 if(remaining===0) document.querySelector(".countdown-title").textContent=language==="ta"?"இனிய திருமண நாள்!":"TODAY IS THE DAY!";
}
updateCountdown();setInterval(updateCountdown,1000);

// Fade sections in as visitors scroll.
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window){
 document.documentElement.classList.add("js-motion");
 document.querySelectorAll(".section-heading,.intro,.story-card,.event-card,.travel-card,.gallery-placeholder,.closing").forEach((el,i)=>{el.setAttribute("data-reveal","");el.style.transitionDelay=(i%3)*90+"ms";});
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.12});
 document.querySelectorAll("[data-reveal]").forEach(el=>observer.observe(el));
}

// A sparse drift of rose petals; respects the visitor's reduced-motion setting.
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
 const symbols=["✿","❀","·"];
 function makePetal(){const p=document.createElement("span");p.className="petal";p.textContent=symbols[Math.floor(Math.random()*symbols.length)];p.style.left=Math.random()*100+"vw";p.style.fontSize=(9+Math.random()*10)+"px";p.style.setProperty("--drift",(Math.random()*150-75)+"px");p.style.animationDuration=(9+Math.random()*7)+"s";document.body.appendChild(p);setTimeout(()=>p.remove(),17000);}
 for(let i=0;i<6;i++)setTimeout(makePetal,i*500);setInterval(makePetal,1900);
}


// Open the invitation card and reveal the wedding website.
const invitationScreen=document.getElementById("invitationScreen");
const openInvitationButton=document.getElementById("openInvitation");
if(invitationScreen && openInvitationButton){
 document.body.classList.add("invitation-locked");
 openInvitationButton.addEventListener("click",()=>{
   invitationScreen.classList.add("is-opening");
   document.body.classList.remove("invitation-locked");
   window.setTimeout(()=>invitationScreen.remove(),900);
 });
}
