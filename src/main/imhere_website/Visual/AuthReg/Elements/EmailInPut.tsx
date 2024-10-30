import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import React from "react";

class EmailInput extends VisualObject {
    constructor(private onEmailChange: (email: string) => void) {
        super();
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                <input
                    type="email"
                    placeholder="Твоя электронная почта или никнейм"
                    onChange={this.handleChange}
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
            </div>
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        this.onEmailChange(email);
    };
}

export default EmailInput;
