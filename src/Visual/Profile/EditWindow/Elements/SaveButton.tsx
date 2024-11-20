import Button from "../../../ItcHyFeeL/DoneElements/Button";

class SaveButton extends Button {
    constructor() {
        super();
    }

    render() {
        return (
            <button
                id={this.id}
                className={this.className}
              //  onMouseLeave={this.handleMouseLeave}
            >
                Сохранить
            </button>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }
}

export default SaveButton;