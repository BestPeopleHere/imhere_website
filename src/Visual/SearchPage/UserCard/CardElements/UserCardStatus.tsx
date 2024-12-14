import VisualObject from "../../../ItcHyFeeL/VisualObject.tsx";


class UserCardStatus extends VisualObject {
    constructor(description: string|undefined) {
        super();

        this.description = description;
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }

    description: string|undefined = undefined
}

export default UserCardStatus;