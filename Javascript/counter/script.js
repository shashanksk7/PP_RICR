let count = 0;

function updateCounter() {
    document.getElementById('counter').textContent = count;
}

function increase() {
    count++;
    updateCounter();
}

function decrease() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}