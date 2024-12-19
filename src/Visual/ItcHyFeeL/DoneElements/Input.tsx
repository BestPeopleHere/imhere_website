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
                    maxLength={this.max}
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

    public setValue(value:string|null|undefined)
    {
        if (value==null || value==undefined)
        {
            this.value= "";
        }
        else
        {
            this.value=value;
        }

        this.forceUpdate();
    }

    public setPlaceholder(placeholder: string)
    {
        this.placeholder = placeholder;
        this.forceUpdate();
    }


    public setMax(max:number)
    {
        this.max=max;
    }

    protected placeholder: string = 'Ввод';
    protected controller: Controller|null = null;
    protected value: string='';

    public max:number = 100000;
}

export default Input;