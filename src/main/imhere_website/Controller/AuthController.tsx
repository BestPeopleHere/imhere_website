import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class AuthController extends Controller {
    async performe(): Promise<void> {
        console.log("performe ButtonClickerController");

        await Data.bc.authUser("1","1");

        // const pokimon = await Data.bc.getPokimon();
        // console.log("pokimon: ", pokimon);
        // Data.visual.drawPokimon(pokimon);
    }
}

export default AuthController;