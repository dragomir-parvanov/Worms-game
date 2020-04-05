import MoveDirectionModel from "../../models/common/MoveDirectionModel";

export default interface WormFunctions{
    move: (directions: MoveDirectionModel)=> void;
    shoot: (direction: any, power: number) => void;
    jump:()=> void
    changeToWeapon: (weapon: any) => void;
}