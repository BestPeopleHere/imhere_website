import Controller from "./Controller.tsx";
import Data from "./Data.tsx";

class ToSearchButtonController2 extends Controller {
    async performe(): Promise<void> {
        console.log("ИСКАТЬ");

        Data.visual.appVisual?.otherProfile.navigate('/search');
        Data.visual.appVisual?.profile.update();
    }
}

export default ToSearchButtonController2;
