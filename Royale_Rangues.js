let slideIndex = 1; // Start with the first slide
showSlides(slideIndex); // Show the first slide

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Wrap around the slide index
    if (n > slides.length) { 
        slideIndex = 1; 
    }    
    if (n < 1) { 
        slideIndex = slides.length; 
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and set the corresponding dot as active
    if (slides[slideIndex - 1]) { // Check if the slide exists
        slides[slideIndex - 1].style.display = "block";  
    }
    if (dots[slideIndex - 1]) { // Check if the dot exists
        dots[slideIndex - 1].className += " active";
    }
}
