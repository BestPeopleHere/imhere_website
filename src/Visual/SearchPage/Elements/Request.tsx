import Input from "../../ItcHyFeeL/DoneElements/Input";
import $ from "jquery";

class Request extends Input {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <input
                    id={this.id}
                    type="text"
                    placeholder="Что для тебя найти?"
                    style={{
                        width: '100%',
                        height: '65px',

                        padding: '10px 20px',
                        fontSize: '18px',
                        fontFamily: 'var(--default-font-family)',
                        boxSizing: 'border-box',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                />
            </div>
        );
    }

    readyToBeRendered() {

        $(`#${this.id}`).off().on('input', (event) => {
            this.value = (event.target as HTMLInputElement).value;
        });
    }

    public getValue(): string {
        return this.value;
    }
}

export default Request;