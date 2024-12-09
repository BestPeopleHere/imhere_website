import Input from "../../../ItcHyFeeL/DoneElements/Input.tsx";

class Nickname extends Input {
    constructor() {
        super();
    }

    render() {
        return (
            <div >

            </div>
        );
    }

    readyToBeRendered() {

    }

    public getValue(): string {
        return this.value;
    }
}

export default Nickname;