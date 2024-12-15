import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import './AddTagsButton.css';


class AddTagsButton extends Button {
    constructor() {
        super();
    }

    render() {
        return (

            <button id={this.id} className="tag-search-button"></button>

        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.

    }

}

export default AddTagsButton;