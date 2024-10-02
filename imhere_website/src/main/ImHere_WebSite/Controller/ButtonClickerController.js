import {StratumController} from "./StratumController.js";

class ButtonClickerController extends StratumController {

    constructor(bc,visual){
        super(bc,visual);
    }

    async performe()
    {
        console.log("performe ButtonClickerController");

        this.getBc().addPokimon();

        console.log("pokimon: ", this.getBc().getPokimon());
        this.getVisual().drawPokimon(this.getBc().getPokimon());
    }
}

export default ButtonClickerController;