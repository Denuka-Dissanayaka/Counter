const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const value = document.getElementById('value');
let count = 0;

const valueColor = () => {
    if (count < 0) {
        value.style.color = 'red';
    } else if (count === 0) {
        value.style.color = '#222';
    } else {
        value.style.color = 'green';
    }
}


decrease.addEventListener('click', () => {
    count = count - 1;
    valueColor();
    value.textContent = count;
})

increase.addEventListener('click', () => {
    count = count + 1;
    valueColor();
    value.textContent = count;
})

reset.addEventListener('click', () => {
    value.textContent = 0;
    value.style.color = "#222";
    count = 0;
})

console.log(value)

