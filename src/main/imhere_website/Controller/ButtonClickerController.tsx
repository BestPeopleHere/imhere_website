import { StratumController } from "./StratumController";
import BusinessLogic from "../BusinessLogic/BusinessLogic";
import Visual from "../Visual/Visual";

class ButtonClickerController extends StratumController {
    constructor(bc: BusinessLogic, visual: Visual) {
        super(bc, visual);
    }

    async performe(): Promise<void> {
        console.log("performe ButtonClickerController");

        await this.getBc().addPokimon();

        const pokimon = await this.getBc().getPokimon();
        console.log("pokimon: ", pokimon);
        this.getVisual().drawPokimon(pokimon);
    }
}

export default ButtonClickerController;
