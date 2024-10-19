import Visual from "../Visual/Visual";
import BusinessLogic from "../BusinessLogic/BusinessLogic";
import Controller from "./Controller";

class StratumController extends Controller {
    protected bc: BusinessLogic;
    #visual: Visual;

    constructor(bc: BusinessLogic, visual: Visual) {
        super();
        if (visual instanceof Visual) {
            this.#visual = visual;
        } else {
            throw new TypeError("Visual is not of type Visual.");
        }

        if (bc instanceof BusinessLogic) {
            this.bc = bc;
        } else {
            throw new TypeError("BusinessLogic is not of type BusinessLogic.");
        }
    }

    async performe(): Promise<void> {
        console.log("Performed StratumController");
    }

    getBc(): BusinessLogic {
        return this.bc;
    }

    getVisual(): Visual {
        return this.#visual;
    }
}

export { StratumController };
