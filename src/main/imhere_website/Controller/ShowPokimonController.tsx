import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

class ShowPokimonController extends Controller {
    async performe(): Promise<void> {
        console.log("performe ShowPokimonController");

        const pokimon = await Data.bc.getPokimon();
        console.log("pokimon: ", pokimon);
        Data.visual.drawPokimon(pokimon);
    }
}

export default ShowPokimonController;
