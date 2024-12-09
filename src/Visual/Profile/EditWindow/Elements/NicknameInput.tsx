import Input from "../../../ItcHyFeeL/DoneElements/Input.tsx";
import $ from "jquery";

class NicknameInput extends Input {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={this.className}>
                <div className="example-container">
                    <input
                        type="text"
                        className="example-input"
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

export default NicknameInput;