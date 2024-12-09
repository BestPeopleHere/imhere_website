import Controller from "./Controller.tsx";
import Data from "./Data.tsx";


class GetUsersTagsForEditController extends Controller {
    async performe(): Promise<void> {
        console.log("Performe GetUsersTagsForEditController");


        const data = await Data.bc.getTags();
        const data2 = await Data.bc.getUserProfileTags();
        console.log(data);
        //fdfsfd



        Data.visual.appVisual?.profile.editTags.setAllTags(data,data2);
        Data.visual.appVisual?.profile.showTagWindow();
    }
}

export default GetUsersTagsForEditController;