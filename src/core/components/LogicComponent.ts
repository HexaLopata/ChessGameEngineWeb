import ComponentBase from "./ComponentBase";

export default class LogicComponent extends ComponentBase {
    mount() {
        super.mount()
        this.game.logicComponents.push(this)
        this.onMount()
    }

    unmount() {
        super.unmount()
        let index = this.game.logicComponents.indexOf(this)
        this.game.renderComponents.splice(index, 1)

        this.onUnmount()
    }

    onUnmount(): void { }
    onMount(): void { }
    update(deltaTime: number): void {  }
}