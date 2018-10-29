const {menueTurnOn, turnActive,addModal, addSlideshow } = require('../js/dom.js')

describe ('menueTurnOn', () => {
	test('should open nav', () =>{
		//arrange
		const header = document.createElement('header')
		const nav = document.createElement('nav')
		const hamburger = document.createElement('div')
		hamburger.classList.add('hamburger')
		hamburger.setAttribute('id', 'hamburger-9')
		const ul = document.createElement('ul')
		ul.classList.add('navigation')
		nav.appendChild(ul)
		nav.appendChild(hamburger)
		header.appendChild(nav)
		hamburger.style.display = 'none'
		//act
		menueTurnOn(hamburger, 'click')
		hamburger.click()

		//assert
		expect(hamburger.classList.contains('is-active')).toBe(true)
	})
	
})



describe ('turnActive', () => {
	test('should activate', () =>{
		//arrange
		const header = document.createElement('header')
		const nav = document.createElement('nav')
		const hamburger = document.createElement('div')
		hamburger.classList.add('hamburger')
		hamburger.setAttribute('id', 'hamburger-9')
		const ul = document.createElement('ul')
		ul.classList.add('navigation')
		nav.appendChild(ul)
		nav.appendChild(hamburger)
		header.appendChild(nav)
		hamburger.style.display = 'none'
		//act
		turnActive(hamburger, ul, 'click')
		hamburger.click()

		//assert
		expect(ul.classList.contains('active')).toBe(true)
	})
	
})


describe ('addModal', () => {
	test('should activate modal', () =>{
		const modal=document.createElement('div')
		modal.classList.add('modal')
		modal.setAttribute('id', 'myModal')
		const span =document.createElement('span')
		span.classList.add('close')
		const button=document.createElement('button')
		button.setAttribute('id', 'btn')

		//arrange

		//act
		addModal(button, modal, span)
		button.click()

		//assert
		expect(modal.style.display).toBe('block')
	})
	
})

describe ('addSlideshow', () => {

	const container = document.createElement('div')
	container.classList.add('slideshow-container')
	const prevButton = document.createElement('a')
	prevButton.classList.add('prev')
	const nextButton = document.createElement('a')
	prevButton.classList.add('next')
	const slide1 = document.createElement('div')
	slide1.classList.add('mySlides')
	const slide2 = document.createElement('div')
	slide2.classList.add('mySlides')

	addSlideshow([slide1, slide2], prevButton, nextButton)
	test('should go forward', () =>{
		nextButton.click()

		expect(slide2.style.display).toBe('block')
	})

	test('should go backward', () =>{
		prevButton.click()

		expect(slide2.style.display).toBe('none')
	})
})
