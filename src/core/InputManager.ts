export default class InputManager {
    private static pressedKeys: KeyboardEvent[] = []

    public static onKeyDown(key: KeyboardEvent) {

        if(InputManager.getPressedKeyIndex(key.key) == -1)
            InputManager.pressedKeys.push(key)        
    }

    public static onKeyUp(key: KeyboardEvent) {

        const index = InputManager.getPressedKeyIndex(key.key)
        if(index != -1)
            InputManager.pressedKeys.splice(index, 1)
        
    }

    private static getPressedKeyIndex(key : string): number {
        for (let i: number = 0; i < InputManager.pressedKeys.length; i++) {
            if (InputManager.pressedKeys[i].key == key) {
                return i
            }
        }   
        return -1
    }

    public static isKeyPressed(key: string) {
        return InputManager.getPressedKeyIndex(key) != -1
    }
}