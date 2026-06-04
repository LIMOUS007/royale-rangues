let slideIndices = {}; // Object to hold slide indices for each slideshow

// Function to show the slides for a specific slideshow
function showSlides(n, slideshowId) {
    let i;
    const slides = document.getElementsByClassName("mySlides" + slideshowId);
    const dots = document.getElementsByClassName("dot" + slideshowId);

    // Wrap around the slide index
    if (n > slides.length) { 
        slideIndices[slideshowId] = 1; 
    }    
    if (n < 1) { 
        slideIndices[slideshowId] = slides.length; 
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
    if (slides[slideIndices[slideshowId] - 1]) { // Check if the slide exists
        slides[slideIndices[slideshowId] - 1].style.display = "block";  
    }
    if (dots[slideIndices[slideshowId] - 1]) { // Check if the dot exists
        dots[slideIndices[slideshowId] - 1].className += " active";
    }
}

// Next/previous controls
function plusSlides(n, slideshowId) {
    if (!slideIndices[slideshowId]) {
        slideIndices[slideshowId] = 1; // Initialize if not set
    }
    showSlides(slideIndices[slideshowId] += n, slideshowId);
}

// Thumbnail image controls
function currentSlide(n, slideshowId) {
    showSlides(slideIndices[slideshowId] = n, slideshowId);
}

// Initialize each slideshow when the document loads
document.addEventListener("DOMContentLoaded", function() {
    const slideshowContainers = document.querySelectorAll('.slideshow-container');
    slideshowContainers.forEach((container, index) => {
        const slideshowId = index + 1; // Unique ID for each slideshow
        slideIndices[slideshowId] = 1; // Initialize slide index for this slideshow
        showSlides(slideIndices[slideshowId], slideshowId); // Show the first slide
    });
});
