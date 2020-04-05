import WormConstructor from "./WormConstructor"
import WormFunctions from "./WormFunctions"
import GameEngine from "../../GameEngine"
import MoveDirectionModel from "../../models/common/MoveDirectionModel"
import MOVE_SPEED_PER_FRAME_Y from "../../constants/MOVE_SPEED_PER_FRAME_Y"
export default class Worm implements WormConstructor, WormFunctions{
    constructor(constructor: WormConstructor) {
        this.name = constructor.name
        this.health = constructor.health ?? 100
        this.dead = constructor.dead ?? false
        this.x = constructor.x
        this.y = constructor.y
    }

    x: number
    y: number
    shoot = (direction: any, power: number) => {
        const particle: any = {}

    }
    private isJumping =false

    jump = () => {
        if (this.isJumping) {
            return;
        }

        for (let i = 0; i < 10; i++){
            setTimeout(() => {
                // moving up
            },500)
        }
    }
    changeToWeapon= (weapon: any) => {
        this.weapon = weapon
    }

    move = (direction: MoveDirectionModel) => {
        if (direction.bottom) {
            if (!direction.top) {
                this.y-=MOVE_SPEED_PER_FRAME_Y
            }
        } else if (direction.top) {
            this.y
        }
    }

    weapon:any = {}

    name: string

    health: number
    
    color: any

    dead:boolean
    
    
}