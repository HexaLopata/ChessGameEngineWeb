import IComponent from "./components/IComponent";
import Transform from "./Transform";

export default class GameObject {
    private _transform: Transform
    private _components: IComponent[] = []

    constructor(transform: Transform) {
        this._transform = transform
    }

    public get transform(): Transform {
        return this._transform
    }

    public get components(): IComponent[] {
        return this._components
    }
}