import Input from "../../../ItcHyFeeL/DoneElements/Input";
import $ from "jquery";

class Status extends Input {
    constructor() {
        super();
        this.value = ''; // Инициализация значения
    }

    render() {
        return (
            <div className={this.className}>
                <textarea
                    className="example-input"
                    id={this.id}
                    placeholder={this.placeholder}
                    style={{
                        width: '700px', // Установка ширины на 700px
                        minHeight: '40px', // Минимальная высота
                        resize: 'vertical', // Разрешить изменение размера только по вертикали
                        overflow: 'auto', // Автоматическая прокрутка
                        color: '#000', // Цвет текста (можно изменить)
                        backgroundColor: '#fff', // Цвет фона (можно изменить)
                        fontFamily: 'var(--default-font-family)', // Установка шрифта
                        fontSize: '18px', // Размер шрифта (можно изменить)
                        padding: '20px', // Отступы для вертикального выравнивания
                        paddingLeft: '36px',
                        fontWeight: 'normal'
                    }}
                    onInput={(event) => {
                        this.value = event.target.value;
                    }}
                />
            </div>
        );
    }

    readyToBeRendered() {
        $(`#${this.id}`).off().on('input', (event) => {
            this.value = (event.target as HTMLTextAreaElement).value;
        });
    }

    public getValue(): string {
        return this.value;
    }
}

export default Status;
