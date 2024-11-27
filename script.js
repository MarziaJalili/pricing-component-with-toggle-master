const input = document.querySelector(".toggle");
const slider = document.querySelector(".slider");
// get the annual price values
const basicPrice = document.querySelector(".basic").querySelector("strong");
const professtionalPrice = document.querySelector(".professtional").querySelector("strong");
const masterPrice = document.querySelector(".master").querySelector("strong");

const prices = [basicPrice, professtionalPrice, masterPrice];

slider.addEventListener("click", () => {
    prices.forEach(price => {
        setTimeout(() => {
            let target;
            let count = 0;
            price.innerText = 0;
            if (input.checked) {
                target = price.dataset.monthlyPrice;
            } else {
                target = price.dataset.annuallyPrice;
            }
            function changeCount() {
                if (count < parseInt(target)) {
                    count++;
                    price.innerText = count.toFixed(2);
                    setTimeout(changeCount, 1)
                } else {
                    price.innerText = target;
                }
            }
            changeCount();
        }, 0);
    })
})


