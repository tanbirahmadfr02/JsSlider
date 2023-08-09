let slide = document.querySelectorAll(".slide");
let slideArray = Array.from(slide);

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

next.addEventListener('click', function () {
    let activeSlide = document.querySelector(".slide.active");
    let currentIndex = slideArray.indexOf(activeSlide);

    function next() {
        if (currentIndex == slideArray.length - 1) {
            next = slideArray[0];
            activeSlide.classList.remove('active');
            next.classList.add('active');
        } else {
            next = slideArray[currentIndex + 1];
            activeSlide.classList.remove('active');
            next.classList.add('active');
        }
    }
    next();
})


prev.addEventListener('click', function () {
    let activeSlide = document.querySelector(".slide.active");
    let currentIndex = slideArray.indexOf[activeSlide];

    function prev() {
        if (currentIndex == 0) {
            prev = slideArray[slideArray.length - 1];
            activeSlide.classList.remove('active');
            prev.classList.add('active');
        } else {
            prev = slideArray[currentIndex - 1];
            activeSlide.classList.remove('active');
            prev.classList.add('active')
        }
    }
    prev();
})


// prev.addEventListener('click', function () {
//     let activeSlide = document.querySelector(".slide.active");
//     let currentIndex = slideArray.indexOf(activeSlide);

//     function prev() {
//         if (currentIndex == 0) {
//             prev = slideArray[slideArray.length - 1];
//             activeSlide.classList.remove('active');
//             prev.classList.add('active')
//         } else {
//             prev = slideArray[currentIndex - 1];
//             activeSlide.classList.remove('active');
//             prev.classList.add('active')
//         }
//     }
//     prev()
// })