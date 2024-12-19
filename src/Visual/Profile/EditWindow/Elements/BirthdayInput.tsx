import Input from "../../../ItcHyFeeL/DoneElements/Input.tsx";
import $ from "jquery";
import styles from './BirthdayInput.module.css'; // Импорт стилей для BirthdayInput

class BirthdayInput extends Input {
    constructor() {
        super();
        this.value = '';
        this.maxDate = this.getTodayDate(); // Устанавливаем максимальную дату
    }

    getTodayDate(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Добавляем ведущий ноль
        const day = String(today.getDate()).padStart(2, '0'); // Добавляем ведущий ноль
        return `${year}-${month}-${day}`; // Формат YYYY-MM-DD
    }

    render() {
        return (
            <div className={this.className}>
                <div className={styles['example-container']}>
                    <input
                        type="date"
                        className={`${styles['example-input']} example-input`} // Добавляем классы стилей
                        id={this.id}
                        defaultValue={this.value}
                        placeholder={this.placeholder}
                        max={this.maxDate} // Ограничиваем выбор будущих дат
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

    private maxDate: string; // Максимально допустимая дата
}

export default BirthdayInput;
