import VisualObject from "../../../ItcHyFeeL/VisualObject.tsx";


class Example extends VisualObject {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }
}

export default Example;