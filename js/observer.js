const header = document.querySelector('header');
const totop = document.querySelector('.totop');

const optionsTotop = {};

const observerTotop = new IntersectionObserver(function(entries, observerTotop) {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    totop.classList.add("hidden");
  } else {
    totop.classList.remove("hidden");
  }
});
}, optionsTotop);

observerTotop.observe(header);


// Slide 1
const slide1 = document.getElementById('slide-1');
const slide1a = document.getElementById('slide-1a');

const optionsSlide1 = {};

const observerSlide1 = new IntersectionObserver(function(entries, observerSlide1) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide1a.classList.add("slideractive");
      } else {
        slide1a.classList.remove("slideractive");
      }
    });
    }, optionsSlide1);

    observerSlide1.observe(slide1);

// Slide 2
const slide2 = document.getElementById('slide-2');
const slide2a = document.getElementById('slide-2a');

const optionsSlide2 = {};

const observerSlide2 = new IntersectionObserver(function(entries, observerSlide2) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide2a.classList.add("slideractive");
      } else {
        slide2a.classList.remove("slideractive");
      }
    });
    }, optionsSlide2);

    observerSlide2.observe(slide2);

// Slide 3
const slide3 = document.getElementById('slide-3');
const slide3a = document.getElementById('slide-3a');

const optionsSlide3 = {};

const observerSlide3 = new IntersectionObserver(function(entries, observerSlide3) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide3a.classList.add("slideractive");
      } else {
        slide3a.classList.remove("slideractive");
      }
    });
    }, optionsSlide3);

    observerSlide3.observe(slide3);

// Slide 4
const slide4 = document.getElementById('slide-4');
const slide4a = document.getElementById('slide-4a');

const optionsSlide4 = {};

const observerSlide4 = new IntersectionObserver(function(entries, observerSlide4) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide4a.classList.add("slideractive");
      } else {
        slide4a.classList.remove("slideractive");
      }
    });
    }, optionsSlide4);

    observerSlide4.observe(slide4);

// Slide 5
const slide5 = document.getElementById('slide-5');
const slide5a = document.getElementById('slide-5a');

const optionsSlide5 = {};

const observerSlide5 = new IntersectionObserver(function(entries, observerSlide5) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide5a.classList.add("slideractive");
      } else {
        slide5a.classList.remove("slideractive");
      }
    });
    }, optionsSlide5);

    observerSlide5.observe(slide5);

// Slide 6
const slide6 = document.getElementById('slide-6');
const slide6a = document.getElementById('slide-6a');

const optionsSlide6 = {};

const observerSlide6 = new IntersectionObserver(function(entries, observerSlide6) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide6a.classList.add("slideractive");
      } else {
        slide6a.classList.remove("slideractive");
      }
    });
    }, optionsSlide6);

    observerSlide6.observe(slide6);

// Slide 7
const slide7 = document.getElementById('slide-7');
const slide7a = document.getElementById('slide-7a');

const optionsSlide7 = {};

const observerSlide7 = new IntersectionObserver(function(entries, observerSlide7) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide7a.classList.add("slideractive");
      } else {
        slide7a.classList.remove("slideractive");
      }
    });
    }, optionsSlide7);

    observerSlide7.observe(slide7);

// Slide 8
const slide8 = document.getElementById('slide-8');
const slide8a = document.getElementById('slide-8a');

const optionsSlide8 = {};

const observerSlide8 = new IntersectionObserver(function(entries, observerSlide8) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide8a.classList.add("slideractive");
      } else {
        slide8a.classList.remove("slideractive");
      }
    });
    }, optionsSlide8);

    observerSlide8.observe(slide8);

// Slide 9
const slide9 = document.getElementById('slide-9');
const slide9a = document.getElementById('slide-9a');

const optionsSlide9 = {};

const observerSlide9 = new IntersectionObserver(function(entries, observerSlide9) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide9a.classList.add("slideractive");
      } else {
        slide9a.classList.remove("slideractive");
      }
    });
    }, optionsSlide9);

    observerSlide9.observe(slide9);

// Slide 10
const slide10 = document.getElementById('slide-10');
const slide10a = document.getElementById('slide-10a');

const optionsSlide10 = {};

const observerSlide10 = new IntersectionObserver(function(entries, observerSlide10) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide10a.classList.add("slideractive");
      } else {
        slide10a.classList.remove("slideractive");
      }
    });
    }, optionsSlide10);

    observerSlide10.observe(slide10);

// Slide 11
const slide11 = document.getElementById('slide-11');
const slide11a = document.getElementById('slide-11a');

const optionsSlide11 = {};

const observerSlide11 = new IntersectionObserver(function(entries, observerSlide11) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide11a.classList.add("slideractive");
      } else {
        slide11a.classList.remove("slideractive");
      }
    });
    }, optionsSlide11);

    observerSlide11.observe(slide11);

// Slide 12
const slide12 = document.getElementById('slide-12');
const slide12a = document.getElementById('slide-12a');

const optionsSlide12 = {};

const observerSlide12 = new IntersectionObserver(function(entries, observerSlide12) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide12a.classList.add("slideractive");
      } else {
        slide12a.classList.remove("slideractive");
      }
    });
    }, optionsSlide12);

    observerSlide12.observe(slide12);

// Slide 13
const slide13 = document.getElementById('slide-13');
const slide13a = document.getElementById('slide-13a');

const optionsSlide13 = {};

const observerSlide13 = new IntersectionObserver(function(entries, observerSlide13) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide13a.classList.add("slideractive");
      } else {
        slide13a.classList.remove("slideractive");
      }
    });
    }, optionsSlide13);

    observerSlide13.observe(slide13);

// Slide 14
const slide14 = document.getElementById('slide-14');
const slide14a = document.getElementById('slide-14a');

const optionsSlide14 = {};

const observerSlide14 = new IntersectionObserver(function(entries, observerSlide14) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide14a.classList.add("slideractive");
      } else {
        slide14a.classList.remove("slideractive");
      }
    });
    }, optionsSlide14);

    observerSlide14.observe(slide14);

// Slide 15
const slide15 = document.getElementById('slide-15');
const slide15a = document.getElementById('slide-15a');

const optionsSlide15 = {};

const observerSlide15 = new IntersectionObserver(function(entries, observerSlide15) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide15a.classList.add("slideractive");
      } else {
        slide15a.classList.remove("slideractive");
      }
    });
    }, optionsSlide15);

    observerSlide15.observe(slide15);

// Slide 16
const slide16 = document.getElementById('slide-16');
const slide16a = document.getElementById('slide-16a');

const optionsSlide16 = {};

const observerSlide16 = new IntersectionObserver(function(entries, observerSlide16) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide16a.classList.add("slideractive");
      } else {
        slide16a.classList.remove("slideractive");
      }
    });
    }, optionsSlide16);

    observerSlide16.observe(slide16);

// Slide 17
const slide17 = document.getElementById('slide-17');
const slide17a = document.getElementById('slide-17a');

const optionsSlide17 = {};

const observerSlide17 = new IntersectionObserver(function(entries, observerSlide17) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide17a.classList.add("slideractive");
      } else {
        slide17a.classList.remove("slideractive");
      }
    });
    }, optionsSlide17);

    observerSlide17.observe(slide17);

// Slide 18
const slide18 = document.getElementById('slide-18');
const slide18a = document.getElementById('slide-18a');

const optionsSlide18 = {};

const observerSlide18 = new IntersectionObserver(function(entries, observerSlide18) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide18a.classList.add("slideractive");
      } else {
        slide18a.classList.remove("slideractive");
      }
    });
    }, optionsSlide18);

    observerSlide18.observe(slide18);

// Slide 19
const slide19 = document.getElementById('slide-19');
const slide19a = document.getElementById('slide-19a');

const optionsSlide19 = {};

const observerSlide19 = new IntersectionObserver(function(entries, observerSlide19) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide19a.classList.add("slideractive");
      } else {
        slide19a.classList.remove("slideractive");
      }
    });
    }, optionsSlide19);

    observerSlide19.observe(slide19);

// Slide 20
const slide20 = document.getElementById('slide-20');
const slide20a = document.getElementById('slide-20a');

const optionsSlide20 = {};

const observerSlide20 = new IntersectionObserver(function(entries, observerSlide20) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide20a.classList.add("slideractive");
      } else {
        slide20a.classList.remove("slideractive");
      }
    });
    }, optionsSlide20);

    observerSlide20.observe(slide20);

// Slide 21
const slide21 = document.getElementById('slide-21');
const slide21a = document.getElementById('slide-21a');

const optionsSlide21 = {};

const observerSlide21 = new IntersectionObserver(function(entries, observerSlide21) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide21a.classList.add("slideractive");
      } else {
        slide21a.classList.remove("slideractive");
      }
    });
    }, optionsSlide21);

    observerSlide21.observe(slide21);

// Slide 22
const slide22 = document.getElementById('slide-22');
const slide22a = document.getElementById('slide-22a');

const optionsSlide22 = {};

const observerSlide22 = new IntersectionObserver(function(entries, observerSlide22) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide22a.classList.add("slideractive");
      } else {
        slide22a.classList.remove("slideractive");
      }
    });
    }, optionsSlide22);

    observerSlide22.observe(slide22);

// Slide 23
const slide23 = document.getElementById('slide-23');
const slide23a = document.getElementById('slide-23a');

const optionsSlide23 = {};

const observerSlide23 = new IntersectionObserver(function(entries, observerSlide23) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide23a.classList.add("slideractive");
      } else {
        slide23a.classList.remove("slideractive");
      }
    });
    }, optionsSlide23);

    observerSlide23.observe(slide23);

// Slide 24
const slide24 = document.getElementById('slide-24');
const slide24a = document.getElementById('slide-24a');

const optionsSlide24 = {};

const observerSlide24 = new IntersectionObserver(function(entries, observerSlide24) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide24a.classList.add("slideractive");
      } else {
        slide24a.classList.remove("slideractive");
      }
    });
    }, optionsSlide24);

    observerSlide24.observe(slide24);

// Slide 25
const slide25 = document.getElementById('slide-25');
const slide25a = document.getElementById('slide-25a');

const optionsSlide25 = {};

const observerSlide25 = new IntersectionObserver(function(entries, observerSlide25) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slide25a.classList.add("slideractive");
      } else {
        slide25a.classList.remove("slideractive");
      }
    });
    }, optionsSlide25);

    observerSlide25.observe(slide25);