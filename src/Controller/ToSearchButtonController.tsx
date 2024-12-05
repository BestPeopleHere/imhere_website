import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

class ToSearchButtonController extends Controller {
    async performe(): Promise<void> {
        console.log("ИСКАТЬ");
        Data.visual.toSearch();
    }
}

export default ToSearchButtonController;
