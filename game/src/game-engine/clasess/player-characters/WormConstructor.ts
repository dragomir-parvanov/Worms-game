import BasicCordinatesModel from "../../models/common/BasicCordinatesModel";

export default interface WormConstructor extends BasicCordinatesModel {
    name: string,
    color: any, // from models
    dead?: boolean,
    health?: number,
    weapon?:any
}