function menueTurnOn(navButton, eventType){
	navButton.addEventListener(eventType, event =>{

		if(navButton.classList.contains('is-active')){
			navButton.classList.remove("is-active")
		}
		else{
			navButton.classList.add("is-active")
		}
	})

}

function turnActive(navButton, menue, eventType){
	navButton.addEventListener(eventType, event =>{
		if(menue.classList.contains('active')){
			menue.classList.remove("active")
		}
		else{
			menue.classList.add("active")
		}
	})
}

function addModal(button, modal, closeButton) {
	button.addEventListener('click', () =>{
		modal.style.display = 'block'
	})
	closeButton.addEventListener('click', () =>{
		modal.style.display = 'none'
	})
	window.addEventListener('click', (event) => {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	})
}

let slideIndex

function addSlideshow(slides, prev, next){

	slideIndex = 1
	showSlides(slideIndex, slides)
	prev.addEventListener('click', () =>{
		plusSlide((-1), slides)
	})
	next.addEventListener('click', ()=>{
		plusSlide((1), slides)
	})
}

function showSlides(n, slides){
	if (n > slides.length) {slideIndex =1}
		if (n< 1) {slideIndex = slides.length}
			for(i = 0; i < slides.length; i++){
				slides[i].style.display ="none"
			}
			slides[slideIndex-1].style.display ="block"

		}

		function plusSlide(n, slides){
			showSlides(slideIndex +=n, slides)
		}

		module.exports={
			menueTurnOn,
			turnActive,
			addModal,
			addSlideshow,
			showSlides, 
			plusSlide,
		

		}