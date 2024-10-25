import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";

class ButtonLogin extends VisualObject {
    constructor() {
        super();
    }

    render() {

        const buttonStyle = {
            width: '75px',
            height: '75px',
            borderRadius: '50%', backgroundColor: '#FF82E0',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', };

        return (
            <button style={buttonStyle}>
                <span style={{color: 'white', fontWeight: 'bold', fontSize: '14px'}}>Log in</span>
            </button>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }
}

export default ButtonLogin;