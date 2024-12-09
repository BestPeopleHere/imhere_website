import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import $ from "jquery";
import '../Profile.css';
import ToSearchButtonController from "../../../Controller/ToSearchButtonController.tsx";


class SearchButton extends Button {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <span id={this.id} className="top-search-button">Поиск</span>

            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.

    }
    public setActionController(controller: ToSearchButtonController)
    {

        console.log(controller);

        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            controller.performe();
        });
    }
}

export default SearchButton;