
import BusinessLogic from "../BusinessLogic/BusinessLogic.js";
import {TroveController} from "./TroveControllers.js";
import Visual from "../Visual/jsx/Visual.jsx";

class MainController {
    start()
    {
        this.visual = new Visual();
        this.bc= new BusinessLogic();
        this.troveController=new TroveController(this.bc,this.visual);

        this.visual.setTroveController(this.troveController);

        this.visual.draw();
    }


    /**
     * @type {BusinessLogic}
     */
    bc;
    /**
     * @type {Visual}
     */
    visual;


    /**
     * @type {TroveController}
     */
    troveController;

}

export default MainController;