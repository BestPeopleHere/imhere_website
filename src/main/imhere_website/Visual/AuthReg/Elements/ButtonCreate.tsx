import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";

class ButtonCreate extends VisualObject {
    constructor() {
        super();
    }

    render() {

        const buttonStyle = {
            textDecoration: 'underline',
            color: '#FFFF',
            cursor: 'pointer',  };

        return (
            <span style={buttonStyle}>
            Create Account
            </span>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }
}

export default ButtonCreate;
