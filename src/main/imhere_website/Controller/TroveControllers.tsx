import Visual from "../Visual/Visual";
import BusinessLogic from "../BusinessLogic/BusinessLogic";
import ButtonClickerController from "./ButtonClickerController";
import ShowPokimonController from "./ShowPokimonController";
import Controller from "./Controller.tsx";

class TroveControllers {
    private bc: BusinessLogic;
    private visual: Visual;

    constructor(bc: BusinessLogic, visual: Visual) {
        if (visual instanceof Visual) {
            this.visual = visual;
        } else {
            throw new TypeError("Visual is not of type Visual.");
        }

        if (bc instanceof BusinessLogic) {
            this.bc = bc;
        } else {
            throw new TypeError("BusinessLogic is not of type BusinessLogic.");
        }
    }

    getButtonClickerController(): Controller {
        return new ButtonClickerController(this.bc, this.visual);
    }

    getShowPokimonController(): Controller {
        return new ShowPokimonController(this.bc, this.visual);
    }

}

export { TroveControllers };
