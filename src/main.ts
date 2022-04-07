import LogicComponent from './core/components/LogicComponent'
import SpriteRenderer from './core/components/SpriteRenderer'
import Game from './core/Game'
import GameObject from './core/GameObject'
import InputManager from './core/InputManager'
import Transform from './core/Transform'

class Lexa extends LogicComponent {

    private _transform!: Transform

    onMount(): void {
        this._transform = this.owner.transform    
    }

    update(deltaTime: number): void {
        const speed = deltaTime / 4
        
        if(InputManager.isKeyPressed('w')) {
            this._transform.y += speed
        }
        if(InputManager.isKeyPressed('s')) {
            this._transform.y -= speed
        }
        if(InputManager.isKeyPressed('a')) {
            this._transform.x -= speed
        }
        if(InputManager.isKeyPressed('d')) {
            this._transform.x += speed
        }
    }
}

const game = new Game(500, 500)

const player = new GameObject(
    new Transform(0, 0, 100, 100)
)

const player2 = new GameObject(
    new Transform(150, 0, 50, 50)
)

const sr = new SpriteRenderer(
    game,
    player,
    'https://sun1-89.userapi.com/s/v1/ig2/tQhiPUUh0P76zzPRKmwh_A2JohYY7h-26VK_ciR_LYG0EtbIO2fgKmi92yNC7zWj0m7nTYh6JcbIUXp-lq8Kw10S.jpg?size=200x0&quality=96&crop=0,3,1080,1080&ava=1',
    {
        width: 100,
        height: 100
    }
)

const lex = new Lexa(game, player)