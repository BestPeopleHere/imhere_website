
import  { ChangeEvent } from "react";
import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import "./SetPhotoButton.css"
import downloadIcon from "../../../assets/images/download.png";

import SetAvatarController from "../../../Controller/SetAvatarController.tsx";

class SetPhotoButton extends Button {
    constructor() {
        super();
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    render() {
        return (
            // <button id={this.id} className="download-photo-button">
            //     <img src={downloadIcon} alt="Download"/>
            // </button>


        <div className="set-photo-button-container">
            {/* Кнопка для загрузки */}
            <button
               // id={this.id}
                className="download-photo-button"
                onClick={this.handleButtonClick}
            >
                <img src={downloadIcon} alt="Download"/>
            </button>

            {/* Скрытый input для выбора файла */}
            <input
                type="file"
                id={`file-input`}
                style={{display: "none"}}
                onChange={this.handleFileChange}
            />
        </div>

    )
        ;
    }

    handleButtonClick() {
        const fileInput = document.getElementById(`file-input`) as HTMLInputElement;
        if (fileInput) {
            fileInput.click(); // Открыть диалог выбора файла
        }


    }

    handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const selectedFile = event.target.files?.[0] || null;
        if (selectedFile) {
            this.file = selectedFile;
            console.log("File uploaded:", this.file);
        }

        this.controller?.performe();
    }

    file: File | null = null;

}

export default SetPhotoButton;
