import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class editProfileController extends Controller {
    async performe(): Promise<void> {
        console.log("AAAAAAAAA");
        Data.visual.toEditProfile();
    }
}

export default editProfileController;
