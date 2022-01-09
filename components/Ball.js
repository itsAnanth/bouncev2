class Ball {
    constructor(x, y, radius, color = '#000000') {
        this.pos = new Vector(x, y);
        this.previous = { ...this.pos };
        this.velocity = new Vector(1, 0);

        this.color = color;
        this.radius = radius;
    }

    force(x, y) {
        this.velocity.y += y;
        this.velocity.x += x;

        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;

        this.velocity.x = this.velocity.y = 0;
    }

    /**
     * applies verlet integration
     * x(n + 1) = 2 * x(n) - x(n - 1) + accel * delta(t)
     * x(n + 1) = x(n) + (x(n) - x(n - 1)) * forces + a * (delta(t)) ^ 2
     */ 
    verlet(delta) {
        // let nextX = (this.pos.x * 2) - this.previous.x; // mult with delta is already done in force()
        // let nextY = (this.pos.y * 2) - this.previous.y;

        let nextX = this.pos.x + (this.pos.x - this.previous.x) * VAR_FRICTION + this.velocity.x * delta.square();
        let nextY = this.pos.y + (this.pos.y - this.previous.y) * VAR_FRICTION + this.velocity.y * delta.square();

        this.previous.x = this.pos.x;
        this.previous.y = this.pos.y;

        this.pos.x = nextX;
        this.pos.y = nextY;
    }

    /**
     * Renders the ball
     * @param {CanvasRenderingContext2D} ctx 
     */
    render(ctx) {
        ctx.fillStyle = 'rgba(27,155,244,0.3)';
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    checkWall() {
        if (this.pos.x < this.radius) {

            let vel_x = this.previous.x - this.pos.x;
            this.pos.x = this.radius;
            this.previous.x = this.pos.x - vel_x * VAR_DAMPING;

        } else if (this.pos.x + this.radius > canvas.width) {

            let vel_x = this.previous.x - this.pos.x;
            this.pos.x = canvas.width - this.radius;
            this.previous.x = this.pos.x - vel_x * VAR_DAMPING;
        }

        if (this.pos.y < this.radius) {

            let vel_y = this.previous.y - this.pos.y;
            this.pos.y = this.radius;
            this.previous.y = this.pos.y - vel_y * VAR_DAMPING;

        } else if (this.pos.y + this.radius > canvas.height) {

            let vel_y = this.previous.y - this.pos.y;
            this.pos.y = canvas.height - this.radius;
            this.previous.y = this.pos.y - vel_y * VAR_DAMPING;
        }
    }
}