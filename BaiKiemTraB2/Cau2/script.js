const number = document.getElementById("number")
const submit = document.getElementById("submit")
const result = document.getElementById("result")


submit.addEventListener("click", () => {
    let sum = 0;
    for (let i = 1; i <= Number(number.value); i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            sum += i
        }
    }
    result.innerHTML=sum
})