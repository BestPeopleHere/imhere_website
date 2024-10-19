import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from "./HomePage/HomePage";

import $ from "jquery";
import { TroveControllers } from "../Controller/TroveControllers";

import Controller from "../Controller/Controller.tsx";
import VisualObject from "./ItcHyFeeL/VisualObject.tsx";
import Element from "./ItcHyFeeL/Element.tsx";

class AppVisual extends VisualObject {
    private troveController: TroveControllers;
    private controllerUpdate: Controller | null = null;
    private pokimon: number = 0;
    private homePage: HomePage;

    constructor(troveController: TroveControllers) {
        super();
        this.troveController = troveController;
        this.controllerUpdate = this.troveController.getShowPokimonController();
        this.homePage = new HomePage();
    }

    render() {
        return (
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <div>
                    <h2>Pokimon from this component: {this.pokimon}</h2>
                    {/* Отображает pokimon из этого класса */}
                    <button id="external-button">
                        Increase Pokimon
                    </button>
                </div>
                <Routes>
                    {/*<Route path="/" element={<HomePage visualSetUp={{setVisualObject: this.setVisualObject.bind(this)}} troveController={this.troveController}/>}/>*/}
                    <Route path="/" element={<Element instance={this.homePage} />} />
                </Routes>
            </Router>
        );
    }

    readyToBeRendered() {
        if (this.controllerUpdate) {
            this.controllerUpdate.performe();
        }

        const buttonClickerController = this.troveController.getButtonClickerController();

        $(`#${'external-button'}`).off().on('click', () => {
            buttonClickerController.performe();
        });

        console.log('update');
    }

    componentWillUnmount() {
        console.log('disable');
    }

    setPokimon(value: number) {
        this.pokimon = value;
        this.forceUpdate();
    }
}

export default AppVisual;
