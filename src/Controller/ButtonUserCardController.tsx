import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

//аааааааааааааа......

class ButtonUserCardController extends Controller {
    async performe(): Promise<void> {
        console.log("Performe");
        Data.visual.toProfile();
    }
}

export default ButtonUserCardController;