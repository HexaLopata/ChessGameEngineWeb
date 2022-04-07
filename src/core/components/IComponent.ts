export default interface IComponent {
    mount: () => void
    unmount: () => void
    set isEnabled(value: boolean)
    get isEnabled() : boolean 
}