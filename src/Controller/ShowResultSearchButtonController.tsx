import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

class ShowResultSearchButtonController extends Controller {
    async performe(): Promise<void> {
        console.log("РЕЗУЛЬТАТ");
        Data.visual.appVisual?.search.showPeopleCards();


    }
}

export default ShowResultSearchButtonController;
