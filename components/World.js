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
            entitiy.render(ctx);
        }
        requestAnimationFrame(this.render.bind(this))
    }

    /**
     * Add a new ball to environment
     * @param {Ball} entitiy 
     */
    add(entitiy) {
        this.entities.push(entitiy);
    }
}