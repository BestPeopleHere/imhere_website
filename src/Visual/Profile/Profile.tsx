import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import Element from "../ItcHyFeeL/Element";
import EditButton from "./Elements/EditButton"
import EditProfileController from "../../Controller/EditProfileController";
import Button from "../ItcHyFeeL/DoneElements/Button";
import './Profile.css';
import SetPhotoButton from "./Elements/SetPhotoButton.tsx";
import SetAvatarController from "../../Controller/SetAvatarController.tsx";
import Avatar from "./Elements/Avatar.tsx";

class Profile extends VisualObject {
    constructor() {
        super();
        this.editButton=new EditButton();
       // this.buttonSetPhoto.setClassName("download-photo-button");
    }

    render() {
        return (
            <div className='main-container'>


                <Element instance={this.avatar}/>
                <Element instance={this.buttonSetPhoto}/>
                {/*<Element instance={this.button}/>*/}

                <div className='main-contain'></div>
                <div className='about-field'></div>
                <div className='top-menu'></div>
                <button className="top-search-button">Поиск</button>
                <Element instance={this.editButton} className="top-edit-button"></Element>

                <button className="top-exit-button">Выйти</button>

                {/*<Element instance={this.buttonSetPhoto}/>*/}

                {/*<button className="download-photo-button"></button>*/}
                <button className="add-project-button"></button>
                <button className="add-tag-button"></button>
                {/*<img src="../../assets/avatar/rik.png" className="photo-element"/>*/}
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
        this.buttonSetPhoto.setActionController(new SetAvatarController());

    }
    editButton: EditButton;
    button: Button=new Button();
    buttonSetPhoto: SetPhotoButton=new SetPhotoButton();
    avatar: Avatar=new Avatar();

}

export default Profile;