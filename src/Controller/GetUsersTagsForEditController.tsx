import Controller from "./Controller.tsx";
import Data from "./Data.tsx";
import TagDTO from "./DTO/TagDTO.tsx";

class GetUsersTagsForEditController extends Controller {
    async performe(): Promise<void> {
        console.log("Performe GetUsersTagsForEditController");


        const data = await Data.bc.getTags();

        Data.visual.appVisual?.profile.editTags.setAllTags(data,Data.visual.appVisual?.profile.userProfile?.tags);

    }
}

export default GetUsersTagsForEditController;