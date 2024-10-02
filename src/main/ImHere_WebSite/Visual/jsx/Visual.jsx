import {StrictMode } from 'react'

import AppVisual from "./AppVisual.jsx";
import {createRoot} from "react-dom/client";
import VisualSetUp from "./VisualSetUp.jsx";


class Visual extends VisualSetUp {


    constructor(props) {
        super(props,'Visual');

    }


    draw() {
        createRoot(document.getElementById('root')).render(
            <StrictMode>
                <AppVisual visualSetUp={{setVisualObject: this.setVisualObject.bind(this)}} troveController={this.troveController}/>
            </StrictMode>
        );
    }

    drawPokimon(value)
    {
        if (this.appVisual instanceof AppVisual) {
            console.log("drawPokimon");

            this.appVisual.setPokimon(value);
        }
    }

    setTroveController(troveController)
    {
        this.troveController = troveController;
    }

    setVisualObject(visualObject)
    {
        switch (true)
        {
            case visualObject instanceof AppVisual: {
                this.appVisual = visualObject;
                console.log("setVisualObject AppVisual");
                break;
            }
            default:
                console.log("Unknown class");
        }

        console.log("you are nice a platypus");
    }
    /**
     * @type {AppVisual}
     */
    appVisual;


    /**
     * @type {TroveController}
     */
    troveController;
}

export default Visual;
