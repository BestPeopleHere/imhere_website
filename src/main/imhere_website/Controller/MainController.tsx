import BusinessLogic from "../BusinessLogic/BusinessLogic";
import { TroveControllers } from "./TroveControllers";
import Visual from "../Visual/Visual";

class MainController {
    private bc: BusinessLogic| null=null;
    private visual: Visual| null=null;
    private troveController: TroveControllers | null=null;

    start(): void {
        this.visual = new Visual();
        this.bc = new BusinessLogic();
        this.troveController = new TroveControllers(this.bc, this.visual);

        this.visual.setTroveController(this.troveController);
        this.visual.draw();
    }
}

export default MainController;