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


module.exports={
		menueTurnOn,
		turnActive,
		addModal
}