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
 
'use strict';
const numberOfImages = slides.length;
const bannerElement = document.querySelector("#banner");
const arrowRight = document.querySelector("#banner .arrow_right");
const arrowLeft = document.querySelector("#banner .arrow_left");
let imageNumber = 0;

// Bonus : slider
let sliderInterval, sliderIntervalAnim;
const intervalMs = 5000;

// HTML Elements inside banner
const createElements = (numberOfImages) =>{
	bannerElement.insertAdjacentHTML('beforeend', `<p></p><div class="dots"></div>`);
	const dotsElement = document.querySelector("#banner .dots");
	for(let i=0; i<numberOfImages;i++){
		dotsElement.insertAdjacentHTML('beforeend', `<div data-id="${i}" class="dot"></div>`);
	}
}

// Display img banner, text, dot
const displayBanner = (imageNumber) =>{
	if (bannerElement.firstElementChild.classList.contains('banner-img')){
		bannerElement.firstElementChild.src = `./assets/images/slideshow/${slides[imageNumber].image}`;
	} else {
		const imageBanner = `<img class="banner-img fade" src="./assets/images/slideshow/${slides[imageNumber].image}" alt ="Banner Print-it">`;
		bannerElement.insertAdjacentHTML('afterbegin', imageBanner);
	}

	// Text
	const textBanner = `${slides[imageNumber].tagLine}`;
	bannerElement.querySelector('p').innerHTML = textBanner;

	// Dots
	const dots = document.querySelectorAll('#banner .dot');
	dots.forEach((element, index) => {
		if(index === imageNumber){
			element.classList.add("dot_selected");
		} else {
			element.classList.remove("dot_selected");
		}
	});

	// anim
	bannerElement.firstElementChild.style.animation = "1s fadeIn forwards ";
	bannerElement.querySelector('p').style.animation = "1s animTagline forwards";

	return imageNumber;
}

// Click on dots
const dotsHandler = () => {
	const dotsElements = document.querySelectorAll("#banner .dot");
	for (let dot of dotsElements){
		dot.style.cursor = 'pointer';
		dot.addEventListener('click', (e) => {
			const thisDot = e.target;
			imageNumber = Number(thisDot.dataset.id);
			displayBanner(imageNumber)
		})
	}
}

///
createElements (numberOfImages);
///
displayBanner(imageNumber);
///
dotsHandler();
///

// Arrow Events
arrowLeft.addEventListener('click', (e) =>{
	imageNumber--;
	if(imageNumber < 0){
		imageNumber = numberOfImages -1;
	}
	// display banner
	bannerHandler(imageNumber);
});
arrowRight.addEventListener('click', (e) =>{
	imageNumber++;
	if(imageNumber >= numberOfImages){
		imageNumber = 0;
	}
	// display banner
	bannerHandler(imageNumber);
	
});

// Slider
const bannerHandler = (imageNumber) => {
	// stop sliderInterval
	clearInterval(sliderInterval);
	clearInterval(sliderIntervalAnim)
	// next or previous img
	displayBanner(imageNumber);		
	// start sliderInterval
	sliderHandler(imageNumber);		
}

const sliderHandler = (imageNumber) => {		
	sliderInterval = setInterval(() => {
		imageNumber++;
		if (imageNumber >= numberOfImages) {
			imageNumber = 0;
		}			
		displayBanner(imageNumber);
	}, intervalMs)

	// reset anim
	sliderIntervalAnim = setInterval(()=> {
		bannerElement.firstElementChild.style.animation = "";
		bannerElement.querySelector('p').style.animation = "";
	}, 4000)
}
sliderHandler(imageNumber)