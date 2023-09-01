function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstDelay = parseInt(form.elements.delay.value);
    const step = parseInt(form.elements.step.value);
    const amount = parseInt(form.elements.amount.value);

    let currentDelay = firstDelay;

    for (let i = 1; i <= amount; i++) {
      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });

      currentDelay += step;
    }

    form.reset(); // Додаємо цю стрічку для скидання форми
  });
});
