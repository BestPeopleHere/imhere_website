import VisualObject from "./ItcHyFeeL/VisualObject.tsx";

class Example extends VisualObject {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Желаю всем искателям конфетки преобрести ириски деток</p>
                </header>
            </div>
        );
    }

    readyToBeRendered() {
        // Реализуйте логику, если необходимо
    }
}

export default Example;
