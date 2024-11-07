//import InstanceRenderer from './InstanceRenderer.tsx';

//import InstanceRender from "./InstanceRender.tsx";
import { v4 as uuidv4 } from 'uuid';
import VisualObject from "../VisualObject.tsx"


class DoneElement extends VisualObject {


    render() {
        return (
            <div>
                <h1>Великие садоводы</h1>
                <p>Будьте аккуратны, на вас напала саранча!</p>
            </div>
        );
    }

    setClassName(className: string | undefined)
    {
        this.className=className;
    }


    id = uuidv4();
    className: string | undefined = undefined;
}

export default DoneElement;
