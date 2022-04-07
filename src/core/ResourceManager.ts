import Sprite from "./Sprite"

export default class ResourceManager {
    private static _images: Map<string, Sprite> = new Map() 
    
    constructor(preLoaded: string[]) {
        for(let src of preLoaded) {
            ResourceManager.loadImage(src)
        }
    }

    public static getSprite(src: string): Sprite {
        if(ResourceManager._images.has(src))
            return <Sprite>ResourceManager._images.get(src)
        return ResourceManager.loadImage(src)
    }

    public static clearCache() {
        ResourceManager._images.clear()
    }

    private static loadImage(src: string): Sprite {
        const image = new Image()
        image.src = src
        const resource = new Sprite(image)
        ResourceManager._images.set('src', resource)
        return resource
    }
}