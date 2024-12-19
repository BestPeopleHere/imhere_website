import Input from "../../ItcHyFeeL/DoneElements/Input.tsx";
import $ from "jquery";

import "./EmailInput.css"

class EmailInput extends Input {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={this.className}>
                <div className="example-container-1">
                    <input
                        className="example-input-1"
                        id={this.id}
                        placeholder={this.placeholder}
                        maxLength={128}
                    />
                </div>
            </div>
        );
    }

    readyToBeRendered() {

        $(`#${this.id}`).off().on('input', (event) => {
            this.value= (event.target as HTMLInputElement).value;
        });
    }

    public getValue(): string
    {
        return this.value;
    }

    value: string="";

}

export default EmailInput;