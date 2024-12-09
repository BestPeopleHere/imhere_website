import DoneElement from "./DoneElement.tsx";
import Controller from "../../../Controller/Controller.tsx";
import $ from "jquery";

class Input extends DoneElement {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input
                    id={this.id}
                    placeholder={this.placeholder}
                />
            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }


    public setInputChangeListener(controller: Controller) {
        this.controller = controller;

        $(`#${this.id}`).off().on('input', (event) => {
            this.controller?.performe();
            this.value= (event.target as HTMLInputElement).value;
        });
    }

    public getValue(): string
    {
        return this.value;
    }

    public setPlaceholder(placeholder: string)
    {
        this.placeholder = placeholder;
        this.forceUpdate();
    }

    protected placeholder: string = 'Вводи, дикле';
    protected controller: Controller|null = null;
    protected value: string='';
}

export default Input;