const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Slideshow: PREVIEW
const banner = document.getElementById("banner");
let view = 0;

const slide = document.createElement("img");
slide.src = `assets/images/slideshow/${slides[view].image}`;
slide.classList.add("banner-img");
banner.appendChild(slide);
const bannerTitle = document.createElement("p");
bannerTitle.innerHTML = slides[view].tagLine;
banner.appendChild(bannerTitle);

// Slideshow: DOTS
const bulletPoints = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++){
	let dot = document.createElement("div");
	dot.classList.add("dot")
	dot.classList.add(`dot${i}`)
	bulletPoints.appendChild(dot)

}

let selectedDot = document.querySelector(`.dot${view}`);
	selectedDot.classList.add("dot_selected");

// Slideshow: ARROWS

const arrowLeft = document.querySelector(".arrow_left");
	arrowLeft.addEventListener("click", () =>{
		console.log("J'ai cliqué à gauche")
});
const arrowRight = document.querySelector(".arrow_right");
	arrowRight.addEventListener("click", () =>{
		console.log("J'ai cliqué à droite")
});


// Slideshow: DOTS click - BONUS
