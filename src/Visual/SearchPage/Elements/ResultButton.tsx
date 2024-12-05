import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import $ from "jquery";
import '../SearchPage.css';
import ShowResultSearchButtonController from "../../../Controller/ShowResultSearchButtonController.tsx";


class ResultButton extends Button {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <span id={this.id} className="result-button"></span>


            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.

    }
    public setActionController(controller: ShowResultSearchButtonController)
    {

        console.log(controller);

        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            controller.performe();
        });
    }
}

export default ResultButton;