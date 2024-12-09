import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import editProfileController from "../../../Controller/EditProfileController.tsx";
import $ from "jquery";
import "./AddTagButton.css";

class AddTagButton extends Button {
    constructor() {
        super();
    }

    render() {
        return (
        <button
            id={this.id}
            className="add-tag-button"// Привязка события
        ></button>
    )
        ;
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }
    public setActionController(controller: editProfileController)
    {

        console.log(controller);

        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            controller.performe();
        });
    }
}

export default AddTagButton;