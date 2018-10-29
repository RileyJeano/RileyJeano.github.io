const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.navigation')
const modal = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const slides = document.querySelectorAll('.mySlides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
const slides2 = document.querySelectorAll('.mySlides2')
const prevButton2 = document.querySelector('.prev2')
const nextButton2 = document.querySelector('.next2')
const dots = document.querySelectorAll('.dot')

menueTurnOn(hamburger, 'click')
turnActive(hamburger, menu, 'click')
addModal(btn, modal, span) 

addSlideshow(slides, prevButton, nextButton)
addSlideshow(slides2, prevButton2, nextButton2)
currentSlide(dots, slides)