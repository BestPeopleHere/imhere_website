import Data from "../Data.tsx";
import Controller from "../Controller.tsx";


class SaveTagsToSearchController extends Controller  {
    async performe(): Promise<void> {
        console.log("ToOtherProfileController");

        Data.visual.appVisual?.search.hideTagWindow();

    }
}

export default SaveTagsToSearchController;
