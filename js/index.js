"use strict";

const question = document.querySelectorAll(".faq1");

question.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    console.log(faq);
  });
});
