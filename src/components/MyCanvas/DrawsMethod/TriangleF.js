import Parent from "./Parent";
import Triangle from "../Draws/Triangle";
export default class TriangleF extends Parent{
    constructor() {
        super(...arguments,Triangle);
        this.dKinds='triangle';
    }
}