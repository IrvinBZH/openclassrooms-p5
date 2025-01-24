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

// PREVIEW
const banner = document.getElementById("banner");
let view = 0;

const slide = document.createElement("img");
slide.src = `assets/images/slideshow/${slides[view].image}`;
slide.classList.add("banner-img");
banner.appendChild(slide);
const bannerTitle = document.createElement("p");
bannerTitle.innerHTML = slides[view].tagLine;
banner.appendChild(bannerTitle);

// ARROWS

const arrowLeft = document.querySelector(".arrow_left");
	arrowLeft.addEventListener("click", () =>{
		directionClick("left");
});
const arrowRight = document.querySelector(".arrow_right");
	arrowRight.addEventListener("click", () =>{
		directionClick("right");
});


function directionClick(arrow){
	selectedDot.classList.remove("dot_selected");
	switch (arrow) {
		case "left":
				view--;
				if (view < 0){
						view = slides.length -1;
				}
			break;
		case "right":
				view++;
				if (view > slides.length - 1){
					view = 0;	
				}
			break;
	}
	slide.src = `assets/images/slideshow/${slides[view].image}`;
	bannerTitle.innerHTML = slides[view].tagLine;
	selectedDot = document.querySelector(`.dot${view}`);
	selectedDot.classList.add("dot_selected"); 

}
// DOTS
const bulletPoints = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++){
	let dot = document.createElement("div");
	dot.classList.add("dot")
	dot.classList.add(`dot${i}`)
	bulletPoints.appendChild(dot)

}

let selectedDot = document.querySelector(`.dot${view}`);
	selectedDot.classList.add("dot_selected");

// DOTS click

function dotClick (select) {
	selectedDot.classList.remove(`dot_selected`);
	slide.src = `assets/images/slideshow/${slides[select].image}`;
	bannerTitle.innerHTML = slides[select].tagLine;
	selectedDot = document.querySelector(`.dot${select}`);
	selectedDot.classList.add("dot_selected"); 
}

for (let i = 0; i < slides.length; i++){
	let dot = document.querySelector(`.dot${i}`)
	dot.addEventListener("click", () =>{
	dotClick(i);
	});
}