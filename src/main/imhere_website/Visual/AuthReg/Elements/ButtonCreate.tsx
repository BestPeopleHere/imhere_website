import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";

class ButtonCreate extends Button {
    constructor() {
        super();
    }

    render() {
        return (
            <span id={this.id} className={this.className}>
            Create Account
            </span>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }
}

export default ButtonCreate;
