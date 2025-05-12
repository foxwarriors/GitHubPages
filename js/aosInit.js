// Initialize AOS (Animate On Scroll)
AOS.init({
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    offset: 350, // offset (in px) from the original trigger point
    delay: 250, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out-quart', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
});
