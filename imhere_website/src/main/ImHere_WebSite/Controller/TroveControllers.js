import Visual from "../Visual/jsx/Visual.jsx";
import BusinessLogic from "../BusinessLogic/BusinessLogic.js";
import Controller from "./Controller.js";
import ButtonClickerController from "./ButtonClickerController.js";


class TroveController {

    constructor(bc,visual){
        if (visual instanceof Visual) {
            this.#visual = visual;
        }

        if (bc instanceof BusinessLogic) {
            this.#bc=bc;
        }
    }

    getButtonClickerController(){
        return this.asActionListener(new ButtonClickerController(this.#bc,this.#visual));
    }

    asActionListener(instance) {
        if (!(instance instanceof Controller)) {
            throw new TypeError("Instance is not of type Controller.");
        }
        return {
            performe: instance.performe.bind(instance)
        };
    }


    /**
     * @type {BusinessLogic}
     */
    #bc;
    /**
     * @type {Visual}
     */
    #visual;

}

export { TroveController };