//JAVASCRIPT FILE

//This gets the mobile menu
const mobileMenu = document.querySelector(".mobmenu")	

// This gets the bar and atttaches the open function to it
const bar = document.querySelector(".fa-bars")
	bar.addEventListener("click", function(){
		mobileMenu.classList.add("open")
		document.body.style.backgroundColor = "rgba(0,0,0,.6)"
	})
	
// This gets the close button and atttaches the close function to it
const close = document.querySelector(".fa-close")
	close.addEventListener("click", function(){
		mobileMenu.classList.remove("open")
		document.body.style.backgroundColor = "#ddd"
	})


//This array contains all the words to be displayed
const textList = ["Smartphone", "Electronics", "IOT devices", "Smartwatches", "Tech Gadgets", "a MacBook"]

//Get the class of the dynamic text and initialize i to 0
const dynamicText = document.querySelector(".dynamic-text")
let i = 0
	
	//This function changes the text	
	function changeText(){
		dynamicText.textContent = textList[i];
		//update the value of i
		i++	
			
		//initialize the value of i to 0 when it gets to the end of the array list
		if(i >= textList.length){
			i = 0
		}
	}
	//call the function and display text every 3 seconds	
	setInterval(changeText, 3000)
	
				
// This section gets the current image tag and creates a function that assigns an image to the hovered text		
const currentImage = document.querySelector(".current-image")		
const phones = document.querySelectorAll(".phone");
	//execute the following function on each phone
	phones.forEach((phone) => {
		phone.addEventListener("mouseenter", (e) => {
			//create a src attribute for the img tag and assign the value to be the value of the second class specifying the name of the image
			currentImage.setAttribute("src", `${e.target.classList[1]}.png`);
		});
	});	
