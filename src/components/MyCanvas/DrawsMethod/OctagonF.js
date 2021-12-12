import Parent from "./Parent";
import Octagon from "../Draws/Octagon";
export default class OctagonF extends Parent{
    constructor() {
        super(...arguments,Octagon);
        this.dKinds='octagon';
    }
}