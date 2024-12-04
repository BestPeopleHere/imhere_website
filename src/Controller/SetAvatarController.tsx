import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

class SetAvatarController extends Controller{
    async performe(): Promise<void> {
        console.log("Performed SetAvatarController");



        await Data.bc.editUserAvatar(Data.visual.appVisual?.profile.buttonSetPhoto.file);

        Data.visual.appVisual?.profile.forceUpdate();
        Data.visual.appVisual?.profile.update();
    }
}

export default SetAvatarController;
