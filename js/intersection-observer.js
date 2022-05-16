// Fade-in elements as they show on viewport
// Reference: https://www.youtube.com/watch?v=huVJW23JHKQ

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    root: null, // This is the default
    threshold: 0.5, // How much of the element has to be visible before firing? (as a percent, 0 --> 1)
    rootMargin: "0px 0px -200px 0px"
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.toggle('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

