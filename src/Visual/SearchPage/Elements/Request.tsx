import Input from "../../ItcHyFeeL/DoneElements/Input";
import $ from "jquery";

class Request extends Input {
    constructor() {
        super();
    }

    render() {
        return (
                <div>
                    <input id={this.id} type="text" placeholder="Что для тебя найти?"/>
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

export default Request;