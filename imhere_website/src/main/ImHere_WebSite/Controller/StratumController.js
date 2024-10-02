import Visual from "../Visual/jsx/Visual.jsx";
import BusinessLogic from "../BusinessLogic/BusinessLogic.js";
import Controller from "./Controller.js";

class StratumController extends Controller
{
    constructor(bc,visual) {
        super();
        if (visual instanceof Visual) {
            this.#visual = visual;
        }

        if (bc instanceof BusinessLogic) {
            this.bc=bc;
        }
    }

    async performe()
    {
        console.log("Performed StratumController");
    }
    /**
     * @returns {BusinessLogic}
     */
    getBc()
    {
        return this.bc;
    }

    /**
     * @returns {Visual}
     */
    getVisual()
    {
        return this.#visual;
    }

    /**
     * @type {BusinessLogic}
     */
    bc;
    /**
     * @type {Visual}
     */
    #visual;
}


export { StratumController };