import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";


class DateOfBirthInput extends VisualObject {
    constructor() {
        super();
        // this.state = {
        //     dateOfBirth: '',
        // };
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <input
                    type="date" // Используем тип 'date' для ввода даты
                    placeholder="Введите дату рождения"
                  //  onChange={this.handleChange}
                    style={{
                        width: '400px',
                        height: '70px',
                        borderRadius: '50px',
                        border: '1px solid #ccc',
                        padding: '10px',
                        paddingLeft: '32px',
                        fontSize: '16px',
                        fontWeight: '500',
                        outline: 'none',
                        backgroundColor: 'white',
                        color: '#D14C7B',
                    }}
                />
                {/* Отображаем значение даты рождения */}
                <div style={{ marginLeft: '10px', alignSelf: 'center' }}>
                    {/*{this.state.dateOfBirth && `Выбранная дата: ${this.state.dateOfBirth}`}*/}
                </div>
            </div>
        );
    }

    // handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     this.setState({ dateOfBirth: event.target.value });
    // };
}

export default DateOfBirthInput;