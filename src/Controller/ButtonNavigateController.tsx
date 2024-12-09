import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

class ButtonNavigateController extends Controller {
    async performe(): Promise<void> {
        console.log("Performe");
        Data.visual.toMain();
    }
}

export default ButtonNavigateController;