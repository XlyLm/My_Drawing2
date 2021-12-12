import TriangleF from "./TriangleF";
import RectangleF from "./RectangleF";
import EllipseF from "./EllipseF";
import StartF from "./StartF";
import OctagonF from "./OctagonF";

export default function Create(){
    switch (arguments[2].dKinds) {
        case 'triangle':
            return new TriangleF(...arguments);
        case 'rectangle':
            return new RectangleF(...arguments);
        case 'ellipse':
            return new EllipseF(...arguments);
        case 'start':
            return new StartF(...arguments);
        case 'octagon':
            return new OctagonF(...arguments);
        default:;
    }
}