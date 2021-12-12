import Parent from "./Parent";
import Ellipse from "../Draws/Ellipse";
export default class EllipseF extends Parent{
    constructor() {
        super(...arguments,Ellipse);
        this.dKinds='ellipse'
    }
}