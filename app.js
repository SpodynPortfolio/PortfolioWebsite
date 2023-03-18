const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const technologies = document.querySelector('.service-item');
const skills_table = document.querySelector('.service-item #skills');
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 150) {
		header.style.backgroundColor = 'rgb(19, 18, 18)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

technologies.addEventListener('click', () =>{
	if(skills_table.style.display == "block"){
		skills_table.style.display = "none";
		document.querySelectorAll('.service-item .icon').forEach(div => {
			div.style.display = "block";
		})
	}
	else{
		skills_table.style.display = "block";
		document.querySelectorAll('.service-item .icon').forEach(div => {
			div.style.display = "none";
		})
	}
	
		
		
	
	
})


/*Copy app*/
const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Skopiowano: " + str);
  };

  /*--*/
  class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
	  this.txtElement = txtElement;
	  this.words = words;
	  this.txt = '';
	  this.wordIndex = 0;
	  this.wait = parseInt(wait, 10);
	  this.type();
	  this.isDeleting = false;
	}
  
	type() {
	  // Current index of word
	  const current = this.wordIndex % this.words.length;
	  // Get full text of current word
	  const fullTxt = this.words[current];
  
	  // Check if deleting
	  if(this.isDeleting) {
		// Remove char
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	  } else {
		// Add char
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	  }
  
	  // Insert txt into element
	  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
	  // Initial Type Speed
	  let typeSpeed = 300;
  
	  if(this.isDeleting) {
		typeSpeed /= 2;
	  }
  
	  // If word is complete
	  if(!this.isDeleting && this.txt === fullTxt) {
		// Make pause at end
		typeSpeed = this.wait;
		// Set delete to true
		this.isDeleting = true;
	  } else if(this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		// Move to next word
		this.wordIndex++;
		// Pause before start typing
		typeSpeed = 500;
	  }
  
	  setTimeout(() => this.type(), typeSpeed);
	}
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
  }