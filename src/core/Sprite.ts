export default class Sprite {
    private _isLoaded: boolean = false
    private _image: HTMLImageElement

    constructor(image: HTMLImageElement) {
        this._image = image
        image.onload = () => {
            this.onLoad()
        }
    }

    private onLoad(): void {
        this._isLoaded = true
    }

    public get isLoaded(): boolean {
        return this._isLoaded
    }

    public get image(): HTMLImageElement {
        return this._image
    }
}