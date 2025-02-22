let count = 19;
const countElement = document.getElementById('count');
document.getElementById('incrementBtn').onclick = () => {
    count++;
    countElement.textContent = count;
};

document.getElementById('colorInput').addEventListener('input', () => {
    const color = document.getElementById('colorInput').value;
    countElement.style.color = color;
});

document.getElementById('decrementBtn').onclick = () => {
    count--;
    countElement.textContent = count;
};

document.getElementById('sendBtn').onclick = () => {
    const inputValue = document.getElementById('numberInput').value;
    count = parseInt(inputValue) || 0;
    countElement.textContent = count;
};
