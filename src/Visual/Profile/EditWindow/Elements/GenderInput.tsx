import Input from "../../../ItcHyFeeL/DoneElements/Input.tsx";
import styles from './GenderInput.module.css'; // Импорт стилей для GenderInput

class GenderInput extends Input {
    constructor() {
        super();
        this.value = 'default'; // Значение по умолчанию
    }

    render() {
        return (
            <div className={this.className}>
                <div className={styles['example-container']}>
                    <select
                        className={`${styles['example-select']} example-select`} // Добавляем классы стилей
                        id={this.id}
                        onChange={(event) => {
                            this.value = event.target.value;
                        }}
                        style={{
                            width: '200px',
                            height: '70px',
                            borderRadius: '50px',
                            border: '1px solid #ccc',
                            padding: '10px',
                            fontFamily: 'var(--default-font-family)', // Установка шрифта
                            fontSize: '18px',
                            outline: 'none',
                            backgroundColor: 'white',
                            color: '#D14C7B',
                            fontWeight: 'normal',
                            paddingLeft: '36px'
                        }}
                    >
                        <option value="default" disabled>Выберите пол</option>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>
                </div>
            </div>
        );
    }

    public getValue(): string {
        return this.value;
    }
}

export default GenderInput;
