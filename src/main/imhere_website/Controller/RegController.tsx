import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class RegController extends Controller {
    async performe(): Promise<void> {
        console.log("performe RegController");

        await Data.bc.registerUser("1","1");
    }
}

export default RegController;
