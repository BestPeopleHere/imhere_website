import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./HomePage/HomePage";

import Controller from "../Controller/Controller.tsx";
import VisualObject from "./ItcHyFeeL/VisualObject.tsx";
import Element from "./ItcHyFeeL/Element.tsx";
import Button from "./ItcHyFeeL/DoneElements/Button.tsx";
import ShowPokimonController from "../Controller/ShowPokimonController.tsx";
import ButtonClickerController from "../Controller/ButtonClickerController.tsx";
import AuthReg from "./AuthReg/AuthReg.tsx";
import Reg from "./Reg/Reg.tsx";

class AppVisual extends VisualObject {
    constructor() {
        super();
        this.controllerUpdate = new ShowPokimonController();
        this.homePage = new HomePage();
    }

    render() {
        return (
            <Router>

                <Element instance={this.button}/>

                <Routes>
                    <Route path="/authreg" element={<Element instance={new Reg()} />} />
                    <Route path="/reg" element={<Element instance={new Reg()} />} />
                    <Route path="/" element={<Element instance={new AuthReg()} />} />
                </Routes>
            </Router>
        );
    }

    readyToBeRendered() {
        if (this.controllerUpdate) {
            this.controllerUpdate.performe();
        }

        this.button.setActionController(new ButtonClickerController());
        this.button.setText("test to connect with backend");

        console.log('update');
    }

    componentWillUnmount() {
        console.log('disable');
    }

     setPokimon(value: number) {
        console.log(value);
        this.pokimon = value;
        this.forceUpdate();
     }


    private button: Button = new Button();

    private controllerUpdate: Controller | null = null;
    private pokimon: number = 0;

    // Все страницы
    private homePage: HomePage;
}

export default AppVisual;
