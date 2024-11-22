import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

class ToSauna extends Controller {
    async performe(): Promise<void> {
        console.log("Performe");
        Data.visual.toSauna();
    }
}

export default ToSauna;