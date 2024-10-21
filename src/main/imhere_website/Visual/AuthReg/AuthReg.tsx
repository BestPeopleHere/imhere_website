import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import Element from "../ItcHyFeeL/Element.tsx";
import Button from "../ItcHyFeeL/DoneElements/Button.tsx";
import ShowController from "../../Controller/ShowController.tsx";

class AuthReg extends VisualObject {
    constructor() {
        super();
        this.button = new Button();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>SOOOOOOOOOOOOS!!!</p>
                </header>
                <Element instance={this.button}/>
            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
        this.button.setActionController(new ShowController());
    }

    button: Button;
}

export default AuthReg;
