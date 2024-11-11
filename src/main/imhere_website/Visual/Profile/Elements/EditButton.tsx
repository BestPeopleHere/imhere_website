import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import editProfileController from "../../../Controller/EditProfileController.tsx";
import $ from "jquery";

class EditButton extends Button {
    constructor() {
        super();
    }

    render() {
        return (
             <div>
            <span id={this.id} className="top-edit-button">Редактировать</span>
            </div>
        );
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

export default EditButton;