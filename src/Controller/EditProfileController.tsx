import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class EditProfileController extends Controller {
    async performe(): Promise<void> {
        console.log("EditProfileController Controller");
        //Data.visual.toEditProfile();

        console.log("Данные ",Data.visual.appVisual?.profile.editWindow.nicknameInput.getValue(),
            Data.visual.appVisual?.profile.editWindow.status.getValue(),
            Data.visual.appVisual?.profile.editWindow.about.getValue(),
            Data.visual.appVisual?.profile.editWindow.birthdayInput.getValue(),
            Data.visual.appVisual?.profile.editWindow.genderInput.getValue());

        await Data.bc.editUserProfile(Data.visual.appVisual?.profile.editWindow.nicknameInput.getValue(),
            Data.visual.appVisual?.profile.editWindow.status.getValue(),
            Data.visual.appVisual?.profile.editWindow.about.getValue(),
            Data.visual.appVisual?.profile.editWindow.birthdayInput.getValue(),
            Data.visual.appVisual?.profile.editWindow.genderInput.getValue());


        Data.visual.appVisual?.profile.hideEditWindow();

        const data = await Data.bc.getUserProfile();
        Data.visual.appVisual?.profile.updateInf(data);
    }
}

export default EditProfileController;