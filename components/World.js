class World {
    constructor() {
        /** @type {Ball[]} */
        this.entities = [];
        this.self = this;
    }

    /**
     * Main renderer process
     */
    render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < this.entities.length; i++) {
            const entitiy = this.entities[i];
            entitiy.force(0, VAR_GRAVITY);
            entitiy.verlet(VAR_DELTA);
            entitiy.checkWall();
            this.colission(entitiy, i);
            entitiy.render(ctx);
        }
        requestAnimationFrame(this.render.bind(this))
    }

    /**
     * 
     * @param {Ball} ball 
     * @param {number} index 
     */
    colission(ball, index) {
        // WIP
    }

    /**
     * Add a new ball to environment
     * @param {Ball} entitiy 
     */
    add(entitiy) {
        this.entities.push(entitiy);
    }
}