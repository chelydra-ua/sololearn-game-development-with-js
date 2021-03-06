window.onload = function () {
    let count = 0;

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let x = 300;
    let y = 350;

    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = 'red';
    context.fill();

    document.onkeydown = function () {
        count += 1;
        y -= 25;
        function draw() {
            context.clearRect(0, 0, 600, 400);

            context.beginPath();
            context.arc(x, y, 50, 0, 2 * Math.PI);
            context.fillStyle = 'red';
            context.fill();

            context.font = '25px Arial';
            context.fillStyle = 'white';
            context.fillText('Count: ' + count, 20, 30);
        }
        window.requestAnimationFrame(draw);
    };
};
