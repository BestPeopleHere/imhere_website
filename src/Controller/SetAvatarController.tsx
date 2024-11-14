import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

class SetAvatarController extends Controller{
    async performe(): Promise<void> {
        console.log("Performed SetAvatarController");
        Data.visual.appVisual?.profile.avatar.changeAvatar();
    }
}

export default SetAvatarController;
