import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import "./SetPhotoButton.css"
import downloadIcon from "../../../assets/images/download.png";

class SetPhotoButton extends Button {
    constructor() {
        super();
    }

    render() {
        return (
            <button id={this.id} className="download-photo-button">
                <img src={downloadIcon} alt="Download"/>
            </button>
        );
    }

    // public setActionController(controller: Controller)
    // {
    //     this.controller = controller;
    //
    //     $(`#${this.id}`).off().on('click', () => {
    //         controller.performe();
    //     });
    // }

    // public setText(text: string)
    // {
    //     this.text = text;
    //     this.forceUpdate();
    // }

    // text: string="Жмопка";
    // controller: Controller|null = null;
}

export default SetPhotoButton;
