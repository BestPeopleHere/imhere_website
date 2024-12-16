import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

class FilterSearchButtonController extends Controller {
    async performe(): Promise<void> {
        console.log("ФИЛЬТР");

        Data.visual.appVisual?.search.showFilter();

    }
}

export default FilterSearchButtonController;
