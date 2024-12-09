import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

class BackSearchButtonController extends Controller {
    async performe(): Promise<void> {
        console.log("НАЗАД");
        Data.visual.toProfile();
    }
}

export default BackSearchButtonController;
