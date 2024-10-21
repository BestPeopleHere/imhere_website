//import VisualObject from "../ItcHyFeel/VisualObject";

import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import Element from "../ItcHyFeeL/Element.tsx";
import Button from "../ItcHyFeeL/DoneElements/Button.tsx";

class HomePage extends VisualObject {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Желаю всем искателям конфетки преобрести ириски деток</p>
                </header>
                <Element instance={new Button()}/>
            </div>
        );
    }
}

export default HomePage;
