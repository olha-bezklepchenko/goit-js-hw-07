// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// отримуємо доступ до інпуту і спану привітання
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

// Додаємо слухача події до інпуту. Створюємо константу для збереження значення вводу і методом .trim() видаляємо пробіли
inputName.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();

  // змінюємо значення текстового контенту з умовою

  outputName.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
