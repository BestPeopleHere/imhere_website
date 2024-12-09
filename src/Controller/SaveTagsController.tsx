import Controller from "./Controller.tsx";
import Data from "./Data.tsx";


class SaveTagsController extends Controller {
    async performe(): Promise<void> {
        console.log("Performe GetUsersTagsForEditController");


        await Data.bc.updateUserTags(Data.visual.appVisual?.profile.editTags.getSelectedTagIds());

        console.log(await Data.bc.getUserProfileTags());

        Data.visual.appVisual?.profile.hideTagWindow();

    }
}

export default SaveTagsController;