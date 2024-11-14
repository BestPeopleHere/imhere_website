import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";

class EditPage extends VisualObject {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>РЕДАКТИРОВАНИЕ ПРОФИЛЯ</p>
                </header>
            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }
}

export default EditPage;