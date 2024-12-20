import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class GetInfForEditController extends Controller {
    async performe(): Promise<void> {
        console.log("EditProfileController Controller");
        //Data.visual.toEditProfile();

        const data = await Data.bc.getUserProfile();

        Data.visual.appVisual?.profile.editWindow.setInf(data);
    }
}

export default GetInfForEditController;