Utils.init();
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ball = new Ball(50, 50, 20);
const delta = 0.8;

let i = 5;

window.onload = update;


function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (i > 0) {
        ball.force(0.6, VAR_GRAVITY);
        i--;
    }
    ball.force(0, VAR_GRAVITY);
    ball.verlet(delta);
    ball.checkWall();
    ball.render(ctx);
    requestAnimationFrame(update);
}


// ball.render(ctx);