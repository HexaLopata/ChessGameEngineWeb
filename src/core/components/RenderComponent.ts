import ComponentBase from "./ComponentBase";

export default abstract class RenderComponent extends ComponentBase {

    mount() {
        super.mount()
        this.game.renderComponents.push(this)
        this.onMount()
    }

    unmount() {
        super.unmount()
        let index = this.game.renderComponents.indexOf(this)
        this.game.renderComponents.splice(index, 1)

        this.onUnmount()
    }

    onUnmount(): void { }
    onMount(): void { }
    abstract draw(ctx: CanvasRenderingContext2D): void
}