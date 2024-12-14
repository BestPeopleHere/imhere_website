
import Data from "../Data.tsx";


class ToOtherProfileController  {
    async performe(id: number): Promise<void> {
        console.log("ToOtherProfileController");


    //    const data = await Data.bc.getOtherUserProfile(id);

      //  Data.visual.appVisual?.otherProfile.updateInf(data);

       // console.log("TOOO: ",data);

        Data.visual.appVisual?.search.navigate("/profile/"+id);
       // console.log("TOOO2: ",data);





    }
}

export default ToOtherProfileController;
