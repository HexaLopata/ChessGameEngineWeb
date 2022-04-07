export default class Loop {

    private lastUpdate: number = 0
    private deltaTime: number = 0

    constructor(
        private draw: () => void,
        private update: (deltaTime: number) => void
    ) { 
        this.startLoop = this.startLoop.bind(this)
    }

    public startLoop(currentTime: number = 0): void {
        window.requestAnimationFrame(this.startLoop)

        this.deltaTime = currentTime - this.lastUpdate
        this.update(this.deltaTime)
        this.draw()
        this.lastUpdate = currentTime
    }
}