import GameEngine from "../game-engine/GameEngine";

export default class RenderEngine{
    initializeCanvas() {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement
        const ctx = canvas.getContext("2d")
        if (!ctx) {
            throw new Error("Cannot get context of canvas")
        }

        RenderEngine.ctx = ctx
    }

    private static ctx: CanvasRenderingContext2D = null as never
    
    private static render():void {
        GameEngine.terrain.forEach((t) => {
            
        })

        GameEngine.particles.forEach((p) => {
            
        })

        GameEngine.playerCharacters.forEach((w) => {
           
        })
    }

    private static isGameLoopStarted = false


    static startGameLoop = ():void =>{
        if (RenderEngine.ctx) {
            throw new Error("Game loop is already started")
        }
        
        function gameLoop() {
            RenderEngine.render()
            window.requestAnimationFrame(gameLoop)
        }
    }
}