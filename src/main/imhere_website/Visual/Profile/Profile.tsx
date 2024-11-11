import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import Element from "../ItcHyFeeL/Element";
import EditButton from "./Elements/EditButton"
import EditProfileController from "../../Controller/EditProfileController";
import Button from "../ItcHyFeeL/DoneElements/Button";
import './Profile.css';

class Profile extends VisualObject {
    constructor() {
        super();
        this.editButton=new EditButton();
    }

    render() {
        return (
            <div className='main-container'>

                <div className='main-contain'></div>
                <div className='about-field'></div>
                <div className='top-menu'></div>
                <button className="top-search-button">Поиск</button>
                <Element instance={this.editButton} className="top-edit-button"></Element>

                <button className="top-exit-button">Выйти</button>
                <button className="download-photo-button"></button>
                <button className="add-project-button"></button>
                <button className="add-tag-button"></button>
                <img src="your-image.jpg" className="photo-element"/>
                <div className="text-tag">Теги</div>
                <div className="text-about">Обо мне</div>
                <div className="text-portfolio">Портфолио</div>

                <div className='logo'>
                    <div className='text-logo'>ImHere</div>
                </div>
            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
        this.editButton.setActionController(new EditProfileController());
    }
    editButton: EditButton;
    button: Button=new Button();

}

export default Profile;