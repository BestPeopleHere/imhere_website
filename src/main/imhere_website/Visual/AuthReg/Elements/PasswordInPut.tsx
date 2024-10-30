import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import React from "react";

class PasswordInput extends VisualObject {
    constructor(private onPasswordChange: (password: string) => void) {
        super();
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                <input
                    type="password"
                    placeholder="Пароль"
                    onChange={this.handleChange}
                    style={{
                        width: '400px',
                        height: '70px',
                        borderRadius: '50px',
                        border: '1px solid #ccc',
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
        const password = event.target.value;
        this.onPasswordChange(password);
    };
}

export default PasswordInput;
