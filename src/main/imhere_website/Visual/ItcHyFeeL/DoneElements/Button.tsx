import DoneElement from "./DoneElement.tsx";
import Controller from "../../../Controller/Controller.tsx";
import $ from "jquery";

class Button extends DoneElement {
    constructor() {
        super();
    }

    render() {
        return (
            <button id={this.id} className={this.className}>
                Жмопка
            </button>
        );
    }

    public setActionController(controller: Controller)
    {
        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            controller.performe();
        });
    }

    controller: Controller|null = null;
}

export default Button;
