const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const button = question.querySelector(".faq-btn");
  const questionText = question.querySelector(".faq-title");
  button.addEventListener("click", () => {
    questions.forEach((item) => {
      if(item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });

  questionText.addEventListener("click", () => {
    questions.forEach((item) => {
      if(item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});