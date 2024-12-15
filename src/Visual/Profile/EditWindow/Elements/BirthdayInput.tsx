import Input from "../../../ItcHyFeeL/DoneElements/Input.tsx";
import $ from "jquery";
import styles from './BirthdayInput.module.css'; // Импорт стилей для BirthdayInput

class BirthdayInput extends Input {
    constructor() {
        super();
        this.value = '';
    }

    render() {
        return (
            <div className={this.className}>
                <div className={styles['example-container']}>
                    <input
                        type="date"
                        className={`${styles['example-input']} example-input`} // Добавляем классы стилей
                        id={this.id}
                        placeholder={this.placeholder}
                        onChange={(event) => {
                            this.value = event.target.value;
                        }}
                        style={{
                            width: '200px',
                            height: '70px',
                            borderRadius: '50px',
                            border: '1px solid #ccc',
                            padding: '10px',
                            paddingLeft: '32px',
                            fontFamily: 'var(--default-font-family)', // Установка шрифта
                            fontSize: '18px',
                            outline: 'none',
                            backgroundColor: 'white',
                            color: '#D14C7B',
                            fontWeight: 'normal'
                        }}
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

export default BirthdayInput;
