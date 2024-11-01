import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
// import Element from "../../ItcHyFeeL/Element.tsx";
import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
// import './ErrorModal.css';

class ErrorModal extends VisualObject {
    private errorMessage: string;

    constructor(errorMessage: string) {
        super();



        this.errorMessage = errorMessage;
        this.button = new Button();
        this.button.setText("Закрыть");
    }

    render() {
        return (
            <div className="error-modal">
                <p dangerouslySetInnerHTML={{ __html: this.errorMessage }}></p> {/* Здесь отображается текст ошибки */}
                {/*<button onClick={() => this.close()}>Закрыть</button>*/}
                {/*<Element instance={new Button()}></Element>*/}
            </div>
        );
    }

    private close() {
        const modal = document.querySelector('.error-modal') as HTMLElement;
        if (modal) modal.style.display = 'none';
    }

    readyToBeRendered() {
        // Логика подготовки компонента к отображению
        this.close()
    }
    public show(errorMassage: string){
        this.errorMessage = errorMassage;
        this.forceUpdate();
        this.makeVisible(); // Делаем модальное окно видимым
    }

    // Метод для установки видимости модального окна
    private makeVisible() {
        const modal = document.querySelector('.error-modal') as HTMLElement;
        if (modal) {
            modal.style.display = 'block'; // Делаем модальное окно видимым
        }
    }
    button: Button;
}

export default ErrorModal;