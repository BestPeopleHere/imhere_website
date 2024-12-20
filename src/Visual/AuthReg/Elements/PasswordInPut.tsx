import $ from "jquery";
import Input from "../../ItcHyFeeL/DoneElements/Input.tsx";
import "./PasswordInput.css"

class PasswordInput extends Input {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={this.className}>
            <div className="example-container">
                <input
                    type="password"
                    className="example-input"
                    id={this.id}
                    placeholder={this.placeholder}
                    maxLength={16}
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
}

export default PasswordInput;