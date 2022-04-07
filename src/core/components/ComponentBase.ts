import Game from "../Game";
import GameObject from "../GameObject";
import IComponent from "./IComponent";

export default abstract class ComponentBase implements IComponent {
    private _isEnabled = true
    
    constructor(protected game: Game, protected owner: GameObject) {
        this.mount()
    }

    mount(): void {
        this.owner.components.push(this)
    }
    unmount(): void {
        const index = this.owner.components.indexOf(this)
        this.owner.components.splice(index, 1)
    }

    set isEnabled(value: boolean) {
        this._isEnabled = value
    }
    get isEnabled(): boolean {
        return this._isEnabled
    }
}