import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class GetInfProfileUser extends Controller {
    async performe(): Promise<void> {
        console.log("EditProfileController Controller");
        //Data.visual.toEditProfile();

        const data = await Data.bc.getUserProfile();

        Data.visual.appVisual?.profile.updateInf(data?.nickname,data?.status,data?.description,data?.birthday,data?.sex,data?.link_to_avatar);
    }
}

export default GetInfProfileUser;