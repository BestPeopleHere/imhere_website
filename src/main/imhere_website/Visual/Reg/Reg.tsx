import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import Element from "../ItcHyFeeL/Element.tsx";
import Button from "../ItcHyFeeL/DoneElements/Button.tsx";

import RegController from "../../Controller/RegController.tsx";
import AuthController from "../../Controller/AuthController.tsx";

class Reg extends VisualObject {
    constructor() {
        super();

        this.buttonReg = new Button();
        this.buttonAuth = new Button();

        this.buttonReg.setText("reg");
        this.buttonAuth.setText("aph");

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Желаю всем искателям конфетки преобрести ириски деток</p>
                </header>
                <Element instance={this.buttonReg}/>
                <Element instance={this.buttonAuth}/>
            </div>
        );
    }

    readyToBeRendered() {
        this.buttonReg.setActionController(new RegController());
        this.buttonAuth.setActionController(new AuthController());
    }

    buttonReg: Button;
    buttonAuth: Button;
}

export default Reg;
