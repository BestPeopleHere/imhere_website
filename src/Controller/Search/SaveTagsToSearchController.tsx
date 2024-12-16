import Data from "../Data.tsx";
import Controller from "../Controller.tsx";


class SaveTagsToSearchController extends Controller  {
    async performe(): Promise<void> {
        console.log("ToOtherProfileController");

        Data.visual.appVisual?.search.editTags.saveSelectedTags();

        if (Data.visual.appVisual?.search) {
            Data.visual.appVisual.search.tags=Data.visual.appVisual?.search.editTags.saveTags;
        }

        Data.visual.appVisual?.search.hideTagWindow();





    }
}

export default SaveTagsToSearchController;
