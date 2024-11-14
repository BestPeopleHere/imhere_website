import Input from "../../ItcHyFeeL/DoneElements/Input";
import $ from "jquery";

class NameInput extends Input {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={this.className}>
                <div className="example-container">
                    <input
                        className="example-input"
                        type="text"
                        id={this.id}
                        placeholder={this.placeholder}
                    />
                </div>
            </div>
        );
    }

    readyToBeRendered() {

        $(`#${this.id}`).off().on('input', (event) => {
            this.value = (event.target as HTMLInputElement).value;
        });
    }

    public getValue(): string {
        return this.value;
    }
}

export default NameInput;