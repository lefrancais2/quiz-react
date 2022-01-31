export const answerCorrect = (clase, answers, count) => {
  let $elements = document.querySelectorAll(clase);

  $elements[answers[count]].classList.add("correct-answer");
  let $el = $elements[answers[count]].querySelector(".right-answer");
  $el.classList.remove("hide");
  $el.innerHTML = `<span class="material-icons">check_circle</span>`;
};

export const wrongAnswer = (index) => {
  let $elements = document.querySelectorAll("");
};

export const addHide = () => {
  let $elements = document.querySelectorAll(".right-answer");
  for (let i = 0; i < $elements.length; i++) {
    $elements[i].classList.add("hide");
  }
};

export const removeHide = () => {
  let $elements = document.querySelectorAll(".right-answer");
  for (let i = 0; i < $elements.length; i++) {
    $elements[i].classList.remove("hide");
  }
};
