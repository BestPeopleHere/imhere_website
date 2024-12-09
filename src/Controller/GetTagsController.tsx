import Controller from "./Controller.tsx";
import Data from "./Data.tsx";


class GetTagsController extends Controller {
    async performe(): Promise<void> {
        console.log("Performe GetTagsController");


        const data = await Data.bc.getUserProfileTags();

        if (Data.visual.appVisual?.profile) {
            Data.visual.appVisual.profile.tags = data;
        }

    }
}

export default GetTagsController;