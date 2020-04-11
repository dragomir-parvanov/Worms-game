import ParticleModel from "./models/ParticleModel"
import Worm from "./clasess/player-characters/Worm"
import PolygonModel from "./models/common/PolygonModel"

export default class GameEngine{
    static terrain: PolygonModel[]
    static playerCharacters: Worm[]
    static particles:ParticleModel[]
}