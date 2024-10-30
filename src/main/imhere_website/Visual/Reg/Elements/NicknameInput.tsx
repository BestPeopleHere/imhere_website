import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import React from "react";

class Example extends VisualObject {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                <input
                    type="nickname"
                    placeholder="Придумай никнейм"
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
                {/*<div>{this.email}</div>*/}
                {/* Отображаем значение email */}
            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }



    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.nickname = event.target.value;
    };

    private nickname: string = '';
}

export default Example;