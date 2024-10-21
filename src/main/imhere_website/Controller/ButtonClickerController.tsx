import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class ButtonClickerController extends Controller {
    async performe(): Promise<void> {
        console.log("performe ButtonClickerController");

        await Data.bc.addPokimon();

        const pokimon = await Data.bc.getPokimon();
        console.log("pokimon: ", pokimon);
        Data.visual.drawPokimon(pokimon);
    }
}

export default ButtonClickerController;
