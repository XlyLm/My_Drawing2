import Parent from "./Parent";
import Start from "../Draws/Start";
export default class StartF extends Parent{
    constructor() {
        super(...arguments,Start);
        this.dKinds='start'
    }
}