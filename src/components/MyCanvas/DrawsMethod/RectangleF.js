import Parent from "./Parent";
import Rectangle from "../Draws/Rectangle";
export default class RectangleF extends Parent{
    constructor() {
        super(...arguments,Rectangle);
        this.dKinds='rectangle';
    }
}