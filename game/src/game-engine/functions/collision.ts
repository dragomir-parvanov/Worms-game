import BasicCordinatesModel from "../models/common/BasicCordinatesModel";
import MoveDirectionModel from "../models/common/MoveDirectionModel";
import CollisionSizeModel from "../models/common/CollisionSizeModel";
import GameEngine from "../GameEngine";
import isPointInPolygon from "./Math/isPointInPolygon";

export default function moveObject<T extends BasicCordinatesModel & CollisionSizeModel>
    (direction: MoveDirectionModel, distance: number, object: T, stepping?:number)
    : number {
    let yAxisMultiplier = 1
    let xAxisMultiplier = 1
    if (direction.bottom) {
        yAxisMultiplier = -1
    }

    if (direction.left) {
        yAxisMultiplier = -1
    }

    
    // terain collision
    for (const { points } of GameEngine.terrain) {
        if (direction.bottom) {
            const desiredLocation = 
        }
    }
    

    return 0;
}