import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import $ from "jquery";
import PeopleSearchController from "../../../Controller/PeopleSearchController.tsx";
import '../SearchPage.css';


class PeopleButton extends Button {
    private activeClass: string; // Явное объявление свойства

    constructor() {
        super();
        this.activeClass = "active-button"; // Присвоение значения
    }

    render() {
        return (
            <div>
                <span id={this.id} className="people-search-button">Люди</span>
            </div>
        );
    }

    setActionController(controller: PeopleSearchController) {
        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            controller.performe();
            this.onClick();
        });
    }

    onClick() {
        this.activate();
        if (this.deactivateOther) {
            this.deactivateOther();
        }
    }

    activate() {
        $(`#${this.id}`).addClass(this.activeClass);
    }

    deactivate() {
        $(`#${this.id}`).removeClass(this.activeClass);
    }

    public deactivateOther?: () => void; // Опциональный метод для деактивации другой кнопки
}


export default PeopleButton;