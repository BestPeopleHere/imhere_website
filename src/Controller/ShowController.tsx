import Controller from "./Controller.tsx";

class ShowController extends Controller {
    async performe(): Promise<void>
    {
        console.log("performe ShowController");
    }
}

export default ShowController;
