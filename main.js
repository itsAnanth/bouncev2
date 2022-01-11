Utils.init();
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ball = new Ball(50, 50, 20);
const delta = 0.8;

let i = 5;
const world = new World();

world.add(ball);

window.onload = world.render.bind(world);

window.addEventListener('click', (e) => {
    const ball = new Ball(e.clientX, e.clientY, 20, 'rgba(27,155,244,0.3)');
    world.add(ball);
})