import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import $ from "jquery";
import BackSearchButtonController from "../../../Controller/BackSearchButtonController.tsx";
import '../SearchPage.css';


class BackButton extends Button {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <span id={this.id} className="back-button"></span>

            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.

    }
    public setActionController(controller: BackSearchButtonController)
    {

        console.log(controller);

        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            controller.performe();
        });
    }
}

export default BackButton;