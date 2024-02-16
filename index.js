const btn = document.querySelector("input");
const prices = document.querySelectorAll("span");
let initialValues = [];

prices.forEach((price) => {
    initialValues.push(parseFloat(price.textContent));
});


btn.addEventListener("click", () => {
    prices.forEach((price, index) => {
        if (btn.checked) {
            price.textContent = Math.floor((initialValues[index] / 10) * 100) / 100;
        }
         else {
            price.textContent = initialValues[index].toFixed(2);
        }
    });
});
