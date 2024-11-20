import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class ButtonClickerController extends Controller {
    async performe(): Promise<void> {

       // Data.visual.toMain();



        console.log("performe ButtonClickerController");

        await Data.bc.addPokimon();
        await Data.bc.getAllUsersPokimon();

        const pokimon: string|null = await Data.bc.getPokimon();
        console.log("pokimon: ", pokimon);

        if (pokimon!=null) {
            Data.visual.drawPokimon(pokimon);
        }


    }
}

export default ButtonClickerController;
