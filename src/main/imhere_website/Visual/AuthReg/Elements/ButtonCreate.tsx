import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";

class ButtonCreate extends VisualObject {
    constructor(private onClick: () => void) {
        super();
    }

    render() {
        const buttonStyle = {
            textDecoration: 'underline',
            color: '#FFFF',
            cursor: 'pointer',
        };

        return (
            <span style={buttonStyle} onClick={this.handleClick}>
                Create Account
            </span>
        );
    }

    private handleClick = () => {
        this.onClick(); // Вызываем переданный обработчик
    };
}

export default ButtonCreate;
