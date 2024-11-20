import Input from "../../../ItcHyFeeL/DoneElements/Input.tsx";


    class GenderInput extends Input {
    constructor() {
        super();
        this.value = '';
    }

    render() {
        return (
            <div className={this.className}>
                <div className="example-container">
                    <select
                        className="example-input"
                        id={this.id}
                        value={this.value}
                      //  onChange={this.handleGenderChange.bind(this)}
                    >
                        <option value="">Выберите...</option>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>
                </div>
            </div>
        );
    }

    // handleGenderChange(event) {
    //     this.value = event.target.value;
    // }

    public getValue(): string {
        return this.value;
    }
}

export default GenderInput;
