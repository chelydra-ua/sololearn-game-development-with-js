window.onload = function () {
    let btn = document.getElementById('jump');
    let count = 0;

    btn.onclick = function () {
        count += 1;
    };
};

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const x = 300;
const y = 350;

context.arc(x, y, 50, 0, 2 * Math.PI);
context.fillStyle = 'red';
context.fill();
