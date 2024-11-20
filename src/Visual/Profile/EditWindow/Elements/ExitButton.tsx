import Button from "../../../ItcHyFeeL/DoneElements/Button";

class SaveButton extends Button {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="button-container"> {/* Контейнер для кнопки */}
                <button
                    id={this.id}
                    className={this.className}
                 //   onMouseLeave={this.handleMouseLeave}
                >
                    &#10006; {/* Используем HTML-код для крестика */}
                </button>
            </div>
        );
    }

    readyToBeRendered() {
        // Запускается при подготовке к работе.
    }
}

export default SaveButton;