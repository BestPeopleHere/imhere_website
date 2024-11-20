import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import Element from "../ItcHyFeeL/Element";
import EditButton from "./Elements/EditButton"
import Button from "../ItcHyFeeL/DoneElements/Button";
import './Profile.css';
import SetPhotoButton from "./Elements/SetPhotoButton.tsx";
import SetAvatarController from "../../Controller/SetAvatarController.tsx";
import Avatar from "./Elements/Avatar.tsx";
import EditWindow from "./EditWindow/EditWindow.tsx";
import ShowEditProfileController from "../../Controller/ShowEditProfileController.tsx";
import GetInfProfileUser from "../../Controller/GetInfProfileUser.tsx";



class Profile extends VisualObject {
    constructor() {
        super();
        this.editButton = new EditButton();

    }

    showEditWindow = () => {
        this.isShowEditWindow=true;

        this.forceUpdate();
    }

    hideEditWindow = () => {
        this.isShowEditWindow=false;

        this.forceUpdate();
    }

    render() {
        return (
            <div className='main-container'>
                {/* Темный фон с полупрозрачностью, если окно активно */}
                {this.isShowEditWindow && <div className='overlay' onClick={this.hideEditWindow}/>}

                {/* Окно EditWindow, видимо, если showEditWindow === true */}
                {this.isShowEditWindow && (
                    <Element instance={this.editWindow} className='edit-window-container'/>
                )}

                <Element instance={this.avatar}/>
                <Element instance={this.buttonSetPhoto}/>

                <div className='main-contain'></div>
                <div className='about-field'></div>
                <div className='top-menu'></div>
                <button className="top-search-button">Поиск</button>
                <Element instance={this.editButton} className="top-edit-button"/>

                <button className="top-exit-button">Выйти</button>

                <button className="add-project-button"></button>
                <button className="add-tag-button"></button>
                <div className="text-tag">Теги</div>
                <div className="text-about">Обо мне</div>

                <div className="text-nickname">{this.nickname}</div>
                <div className="text-status">{this.status}</div>
                <div className="text-description">{this.description}</div>
                <div className="text-birthday">{this.birthday}</div>
                <div className="text-sex">{this.sex}</div>

                <div className="text-portfolio">Портфолио</div>

                <div className='logo'>
                    <div className='text-logo'>ImHere</div>
                </div>
            </div>
        );
    }

    updateInf(nickname: string|undefined,status: string|undefined, description: string|undefined,birthday: string|undefined,sex: string|undefined,link_to_avatar:string|undefined)
    {
        this.nickname = nickname;
        this.status = status;
        this.description = description;
        this.birthday = birthday;
        this.sex=sex;
        this.link_to_avatar = link_to_avatar;

        this.avatar.avatarUrl=link_to_avatar;
        console.log("link: ",link_to_avatar);

        this.forceUpdate();
    }

    readyToBeRendered() {
        this.editButton.setActionController(new ShowEditProfileController());
       // this.buttonSetPhoto.setActionController(new SetAvatarController());

        this.getInfProgileController.performe();
    }

    editButton: EditButton;
    button: Button = new Button();
    buttonSetPhoto: SetPhotoButton = new SetPhotoButton();
    avatar: Avatar = new Avatar();
    isShowEditWindow: boolean = false;
    getInfProgileController:GetInfProfileUser = new GetInfProfileUser();

    editWindow: EditWindow=new EditWindow();

    nickname: string|undefined="none";
    status: string|undefined="none";
    description: string|undefined="none";
    birthday: string|undefined="none";
    sex: string|undefined="none";
    link_to_avatar: string|undefined="none";
}

export default Profile;