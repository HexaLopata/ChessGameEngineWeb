import Game from "../Game";
import GameObject from "../GameObject";
import Sprite from "../Sprite";
import ResourceManager from "../ResourceManager";
import RenderComponent from "./RenderComponent";

export default class SpriteRenderer extends RenderComponent {

    private _sprite!: Sprite
    private _spriteSrc: string
    private _size: { width: number, height: number }

    constructor(game: Game, owner: GameObject, spriteSrc: string, size: { width: number, height: number }) {
        super(game, owner)
        this._spriteSrc = spriteSrc
        this._size = size
        this._sprite = ResourceManager.getSprite(this._spriteSrc)
    }

    draw(ctx: CanvasRenderingContext2D): void {
        const { x, y } = this.owner.transform
        const { width, height } = this._size

        if (this._sprite.isLoaded) {
            ctx.drawImage(this._sprite.image, x, -y, width, height)
        } else {
            ctx.fillStyle = 'magenta'
            ctx.fillRect(x, -y, width, height)
        }
    }
}