import PolygonModel from "../../models/common/PolygonModel";
import MoveDirectionModel from "../../models/common/MoveDirectionModel";


/**
 * Determines whenever a point is inside the polygon
 * @export
 * @param {PolygonModel} polygon
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
export default function isPointInPolygon(polygon: PolygonModel, x: number, y: number): boolean{
    let inside = false
    const {points} = polygon
    for (var i = 0, j = points.length - 1; i < points.length; j = i++) {
        const xi = points[i].x, yi = points[i].y;
        const xj = points[j].x, yj = points[j].y;

        const intersect = ((yi > y) !== (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside
}