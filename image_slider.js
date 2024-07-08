const slides = document.querySelectorAll(".slide") // variable which includes all slides
let counter = 0; // counter to start slides from zero
slides.forEach(             // slides function
    (slide,index) => {
    slide.style.left = `${index * 100}%`
});

const goPrev = () => {          // Previous button function
    if (counter > 0)            // condition not to move slides before zero index
        {
            counter--
            slideImage()
        }
    }

const goNext = () => {          // Next button function
    if (counter < slides.length -1)     // condition not to move slides after the desire length
        {
            counter++;
            slideImage()
        }
    }

const slideImage = () => {      // slide image function to transform images
    slides.forEach(
        (slide) => {
        slide.style.transform = `translateX(-${ counter * 100 }% )`
    })
}