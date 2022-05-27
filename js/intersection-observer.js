// Fade-in elements as they show on viewport
// Reference: https://www.youtube.com/watch?v=huVJW23JHKQ


// faders = "All elements with the .fade-in class"
const faders = document.querySelectorAll('.fade-in');


// These options are requried/used by "IntersectionObserver"
const appearOptions = {
    root: null, // This is the default
    threshold: 0.15, // How much of the element has to be visible before firing? (as a percent, 0.00 --> 1.00)
    rootMargin: "0px 0px -200px 0px" // This changes the size of the detectable box the screen has to intersect with
                                     // Adding negative margin to the bottom (3rd value) is common, otherwise things 
                                     // at the end of the page tend to do weird things.
                                     // Essentially a negative value makes it show up easier.
}


const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {   //Everything starts out as not intersecting
            return;
        } else {    
            entry.target.classList.toggle('appear');     // Toggle ('add') the "appear" class to the entry
            appearOnScroll.unobserve(entry.target);      // Once it's appeared, there is no need to keep checking
        }
    })
}, appearOptions) // Some options have to be passed in for the "IntersectionObserver". Defined above


// This actually executes all of the stuff in place above. For each element with the "fade-in" class, we observe and appearonscroll
faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

