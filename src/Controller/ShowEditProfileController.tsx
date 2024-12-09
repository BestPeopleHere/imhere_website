import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class ShowEditProfileController extends Controller {
    async performe(): Promise<void> {
        console.log("ShowEditProfileController");
        //Data.visual.toEditProfile();
        Data.visual.appVisual?.profile.showEditWindow();
    }
}

export default ShowEditProfileController;