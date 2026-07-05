/*=========================================
YASH SRIVASTAVA OFFICIAL WEBSITE
SCRIPT.JS
==========================================*/



// =========================
// LOADER
// =========================

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => {

        loader.style.display = "none";

    }, 700);

});



// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// =========================
// SCROLL PROGRESS BAR
// =========================

const scrollBar = document.querySelector(".scroll-bar");

window.addEventListener("scroll", function () {

    let totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (window.scrollY / totalHeight) * 100;

    scrollBar.style.width = progress + "%";

});



// =========================
// HEADER EFFECT
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        header.style.background = "rgba(8,17,31,.95)";

        header.style.padding = "16px 10%";

    } else {

        header.style.background = "rgba(0,0,0,.4)";

        header.style.padding = "22px 10%";

    }

});
// =========================
// CUSTOM CURSOR
// =========================

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

    cursorOutline.style.left = (e.clientX - 17) + "px";
    cursorOutline.style.top = (e.clientY - 17) + "px";

});



// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



// =========================
// FADE-IN ANIMATION
// =========================

const revealElements = document.querySelectorAll("section");

function revealSections(){

    revealElements.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealPoint = 120;

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - revealPoint){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();



// =========================
// HERO IMAGE FLOATING
// =========================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

setInterval(()=>{

heroImage.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:3000,

iterations:1,

easing:"ease-in-out"

});

},3000);

}
// =========================
// GALLERY IMAGE HOVER EFFECT
// =========================

const galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach((img)=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.12) rotate(2deg)";

img.style.transition=".5s";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1) rotate(0deg)";

});

});



// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons=document.querySelectorAll(".btn,.btn-outline");

buttons.forEach((button)=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

const x=e.clientX-rect.left-size/2;

const y=e.clientY-rect.top-size/2;

ripple.style.width=size+"px";
ripple.style.height=size+"px";
ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.4)";
ripple.style.transform="scale(0)";
ripple.style.animation="ripple .6s linear";
ripple.style.pointerEvents="none";

this.style.position="relative";
this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});



// =========================
// PARALLAX HERO EFFECT
// =========================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

let offset=window.scrollY;

hero.style.backgroundPositionY=offset*0.4+"px";

}

});



// =========================
// RANDOM QUOTE CHANGER
// =========================

const quote=document.querySelector(".quote h2");

const quotes=[

'"Every story begins with a question."',

'"Books keep dreams alive."',

'"Mystery starts where curiosity begins."',

'"Words have the power to create worlds."',

'"Imagination has no limits."'

];

if(quote){

setInterval(()=>{

const random=Math.floor(Math.random()*quotes.length);

quote.style.opacity="0";

setTimeout(()=>{

quote.innerHTML=quotes[random];

quote.style.opacity="1";

},400);

},7000);

}



// =========================
// NEWSLETTER
// =========================

const newsletterButton=document.querySelector(".newsletter-box button");

if(newsletterButton){

newsletterButton.addEventListener("click",()=>{

const email=document.querySelector(".newsletter-box input").value;

if(email===""){

alert("Please enter your email.");

}

else{

alert("Thank you for subscribing!");

document.querySelector(".newsletter-box input").value="";

}

});

}



// =========================
// CONTACT FORM
// =========================

const contactForm=document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

contactForm.reset();

});

}
// =========================
// TYPING EFFECT
// =========================

const heroTitle = document.querySelector(".hero-content h2");

if(heroTitle){

const words = [

"Author",

"Storyteller",

"Mystery Writer",

"Dreamer"

];

let word = 0;

setInterval(()=>{

heroTitle.style.opacity="0";

setTimeout(()=>{

heroTitle.innerHTML=words[word];

heroTitle.style.opacity="1";

word++;

if(word>=words.length){

word=0;

}

},400);

},3000);

}



// =========================
// ANIMATED COUNTERS
// =========================

const counters=document.querySelectorAll(".stat h2");

let counterStarted=false;

function startCounters(){

if(counterStarted) return;

const trigger=window.innerHeight;

counters.forEach(counter=>{

const top=counter.getBoundingClientRect().top;

if(top<trigger){

counterStarted=true;

counters.forEach(item=>{

let target=item.innerText;

if(target==="∞") return;

target=parseInt(target);

let count=0;

let speed=Math.max(20,2000/target);

const update=()=>{

if(count<target){

count++;

item.innerText=count;

setTimeout(update,speed);

}else{

item.innerText=target;

}

};

update();

});

}

});

}

window.addEventListener("scroll",startCounters);

startCounters();



// =========================
// ACTIVE NAV UNDERLINE
// =========================

const navItems=document.querySelectorAll("nav a");

navItems.forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.color="#d4af37";

});

link.addEventListener("mouseleave",()=>{

if(!link.classList.contains("active")){

link.style.color="#ffffff";

}

});

});



// =========================
// IMAGE FADE-IN
// =========================

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.2});

images.forEach(img=>{

img.style.opacity="0";

img.style.transform="translateY(40px)";

img.style.transition=".8s";

imageObserver.observe(img);

});



// =========================
// SECTION REVEAL
// =========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});



// =========================
// CONSOLE MESSAGE
// =========================

console.log("%cWelcome to the Official Website of Yash Srivastava","color:gold;font-size:20px;font-weight:bold;");

console.log("%cAuthor of Tree Under Shed","color:white;font-size:14px;");



// =========================
// WEBSITE INITIALIZED
// =========================

window.onload=()=>{

document.body.style.opacity="1";

console.log("Website Loaded Successfully.");

};
