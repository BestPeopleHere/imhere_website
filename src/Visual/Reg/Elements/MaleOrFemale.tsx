
import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";

class GenderSelector extends VisualObject {
    constructor() {
        super();
        // this.state = {
        //     gender: '',
        // };
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label style={{ marginRight: '20px', cursor: 'pointer' }}>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                           // checked={this.state.gender === 'male'}
                          //  onChange={this.handleChange}
                            style={{ marginRight: '8px' }}
                        />
                        М
                    </label>
                    <label style={{ cursor: 'pointer' }}>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                           // checked={this.state.gender === 'female'}
                           // onChange={this.handleChange}
                            style={{ marginRight: '8px' }}
                        />
                        Ж
                    </label>
                </div>
            </div>
        );
    }

    readyToBeRendered() {

    }
    // handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     this.setState=event.target.value;
    // };

}

export default GenderSelector;
