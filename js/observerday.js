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