"use strict";

const question = document.querySelectorAll(".faq1");

question.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    console.log(faq);
  });
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    console.log(entries);
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
