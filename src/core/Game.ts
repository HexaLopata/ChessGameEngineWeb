import LogicComponent from "./components/LogicComponent"
import RenderComponent from "./components/RenderComponent"
import InputManager from "./InputManager"
import Loop from "./Loop"

export default class Game {
    private _canvas: HTMLCanvasElement
    private _gameLoop: Loop
    private _renderComponents: RenderComponent[] = []
    private _logicComponents: LogicComponent[] = []
    protected _context: CanvasRenderingContext2D

    constructor(width: number, height: number) {
        const canvas = document.querySelector('#canvas')

        if (canvas == null) {
            throw 'В DOM дереве нет элемента с id "canvas"'
        }

        if (!(canvas instanceof HTMLCanvasElement)) {
            throw 'Элемент с id "canvas" не является элементом "canvas"'
        }

        this._canvas = <HTMLCanvasElement>canvas
        this._context = <CanvasRenderingContext2D>this._canvas.getContext('2d')
        this._canvas.width = width
        this._canvas.height = height
        this._gameLoop = new Loop(() => this.draw(), (deltaTime: number) => { this.update(deltaTime) })
        this.initInput()
        this._gameLoop.startLoop()
    }

    public get renderComponents(): RenderComponent[] {
        return this._renderComponents
    }

    public get logicComponents(): LogicComponent[] {
        return this._logicComponents
    }

    private update(deltaTime: number) {
        this._logicComponents.forEach(c => {
            if (c.isEnabled)
                c.update(deltaTime)
        })
    }

    private draw() {
        this._context.fillStyle = 'black'
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height)
        this._renderComponents.forEach(c => {
            if (c.isEnabled)
                c.draw(this._context)
        })
    }

    private initInput() {

        window.addEventListener('keydown', (e) => {
            InputManager.onKeyDown(e)
        })

        window.addEventListener('keyup', (e) => {
            InputManager.onKeyUp(e)
        })
    }
}