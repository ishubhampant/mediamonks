const carousel = document.querySelector('.carousel__images')
const buttons = document.querySelectorAll('button')
const totalImages = document.querySelectorAll('.carousel__images img').length

let imageIndex = 0
let translateX = 0

console.log(totalImages)
console.log(buttons)

buttons.forEach(button =>{
    button.addEventListener('click', event =>{
        if(event.target.id === 'pre'){
            if(imageIndex > 0){
                imageIndex--
                translateX += 300

            }
        }else{
            if(imageIndex < totalImages){
                imageIndex++
                translateX = translateX - 300
                console.log("next")
            }
        }
        if(imageIndex === totalImages){
            imageIndex = 0
            translateX = 0
        }
        carousel.style.transform = `translateX(${translateX}px)`
    })
})