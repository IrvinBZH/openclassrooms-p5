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

// HTML Elements inside banner
const createElements = (numberOfImages) =>{
	bannerElement.insertAdjacentHTML('beforeend', `<p></p><div class="dots"></div>`);
	const dotsElement = document.querySelector("#banner .dots");
	for(let i=0; i<numberOfImages;i++){
		dotsElement.insertAdjacentHTML('beforeend', `<div data-id="${i}" class="dot"></div>`);
	}
}

// Display img banner, text, dot
const displayBanner = (imageNumber=0) =>{

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
			element.classList.remove("dot_selected")
		}
	});

	return imageNumber;
}

// Click on dots
const dotsHandler = () => {
	const dotsElements = document.querySelectorAll("#banner .dot");

	for (let dot of dotsElements){
		dot.style.cursor = 'pointer';
		dot.addEventListener('click', (e) => {
			const thisDot = e.target;
			const idDot = Number(thisDot.dataset.id);
			displayBanner(idDot)
		})
	}
}

///
createElements (numberOfImages);
///
let imageNumber = displayBanner();
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
const bannerHandler = (imageNumber)=>{
	displayBanner(imageNumber);
}