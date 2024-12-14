import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class GetInfProfileUser extends Controller {
    async performe(): Promise<void> {
        console.log("EditProfileController Controller");
        //Data.visual.toEditProfile();

        const data = await Data.bc.getOtherUserProfile(Data.visual.appVisual?.otherProfile.getLastPathSegment());

        Data.visual.appVisual?.otherProfile.updateInf(data);
    }
}

export default GetInfProfileUser;