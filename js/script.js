//gets the carousel class div
const carousel = document.querySelector('.carousel__images')
//takes button class on click event
const buttons = document.querySelectorAll('.btn')
//grab all the images(img) with className .carousel__images
const totalImages = document.querySelectorAll('.carousel__images img').length

let imageIndex = 0
let translateX = 0

console.log(totalImages)
console.log(buttons)

//whenever there is a click event on any of the buttons
buttons.forEach(button =>{
    button.addEventListener('click', event =>{
        //if the button id is "pre" then it shifts the image position to 300px right
        if(event.target.id === 'pre'){
            if(imageIndex > 0){
                imageIndex--
                translateX += 300
            }
        }else{
            //if the button id is "next" then it shifts the image position to 300px left
            if(imageIndex < totalImages){
                imageIndex++
                translateX = translateX - 300
            }
            if(imageIndex === totalImages){
                imageIndex = 0
                translateX = 0
            }
        }
        //if the imageIndex is at the last image then it makes position to 0 to shift it to first image
        
        carousel.style.transform = `translateX(${translateX}px)`
    })
})