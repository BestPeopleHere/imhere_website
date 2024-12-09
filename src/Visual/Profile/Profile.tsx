import Tag from "./Elements/Tag.tsx";
import TagWindow from "./Elements/TagWindow.tsx";
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

import SearchButton from "./Elements/SearchButton.tsx";
import ToSearchButtonController from "../../Controller/ToSearchButtonController.tsx";

import UserProfileDTO from "../../Controller/DTO/UserProfileDTO.tsx";
import AddTagButton from "./Elements/AddTagButton.tsx";
import GetUsersTagsForEditController from "../../Controller/GetUsersTagsForEditController.tsx";
import TagDTO from "../../Controller/DTO/TagDTO.tsx";
import GetTagsController from "../../Controller/GetTagsController.tsx";




class Profile extends VisualObject {
    isTagWindowVisible: boolean = false;
    // tags: { label: string; color: string }[] = [
    //     { label: "Кошка", color: "#FFC0CB" },
    //     { label: "Собака", color: "#FFD700" },
    //     { label: "Кулинария", color: "#98FB98" },
    //     { label: "Программирование", color: "#ADD8E6" },
    // ];

    constructor() {
        super();
        this.editButton = new EditButton();
        this.searchButton = new SearchButton();

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
                {this.isTagWindowVisible && (
                    <div className='overlay' onClick={this.hideTagWindow}/>
                )}
                {this.isTagWindowVisible && (
                    <Element
                        instance={this.editTags}
                        className="tag-window-container"
                    />
                )}

                <div className="tags-container">
                    {this.tags?.map((tag: TagDTO) => (
                        <Element
                            key={tag.id}
                            instance={new Tag(tag.tag_name)}
                            className="tag"
                        />
                    ))}
                    {/*<button*/}
                    {/*    className="add-tag-button"*/}
                    {/*    onClick={this.showTagWindow}>*/}
                    {/*    +*/}
                    {/*</button>*/}
                </div>

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
                <Element instance={this.searchButton} className="top-search-button" />

                <Element instance={this.editButton} className="top-edit-button"/>

                <button className="top-exit-button">Выйти</button>

                <button className="add-project-button"></button>
                {/*<button className="add-tag-button"></button>*/}


                <Element instance={this.addTagButton}/>

                {/*<button*/}
                {/*    className="add-tag-button"*/}
                {/*    onClick={() => this.showTagWindow()} // Привязка события*/}
                {/*></button>*/}

                <div className="text-tag">Теги</div>
                <div className="text-about">Обо мне</div>

                <div className="text-nickname">{this.userProfile?.nickname}</div>
                <div className="text-status">{this.userProfile?.status}</div>
                <div className="text-description">{this.userProfile?.description}</div>
                <div className="text-birthday">{this.userProfile?.birthday}</div>
                <div className="text-sex">{this.userProfile?.sex}</div>

                <div className="text-portfolio">Портфолио</div>

                <div className='logo'>
                    <div className='text-logo'>ImHere</div>
                </div>
            </div>
        );
    }

    updateInf(userProfile: UserProfileDTO|null) {

        this.userProfile=userProfile;
        //
        // this.nickname = nickname;
        // this.status = status;
        // this.description = description;
        // this.birthday = birthday;
        // this.sex=sex;
        // this.link_to_avatar = link_to_avatar;
        //
         this.avatar.avatarUrl=userProfile?.link_to_avatar;
        // console.log("link: ",link_to_avatar);

        this.forceUpdate();
    }

    readyToBeRendered() {
        this.editButton.setActionController(new ShowEditProfileController());

       // this.buttonSetPhoto.setActionController(new SetAvatarController());
        this.searchButton.setActionController(new ToSearchButtonController());

        this.buttonSetPhoto.setActionController(new SetAvatarController());
        this.addTagButton.setActionController(new GetUsersTagsForEditController());


        const getTags:GetTagsController=new GetTagsController();
        getTags.performe();


        this.getInfProgileController.performe();
    }

    showTagWindow = () => {
        console.log("Клик по кнопке +");
        this.isTagWindowVisible = true;
        this.forceUpdate();
    };

    hideTagWindow = () => {
        this.isTagWindowVisible = false; // Скрываем окно
        this.forceUpdate(); // Обновляем интерфейс
    };


    // addTags = (newTags: { label: string; color: string }[]) => {
    //     this.tags = [...this.tags, ...newTags];
    //     this.hideTagWindow();
    // };


    editButton: EditButton;
    searchButton: SearchButton;
    button: Button = new Button();
    buttonSetPhoto: SetPhotoButton = new SetPhotoButton();
    avatar: Avatar = new Avatar();
    isShowEditWindow: boolean = false;
    getInfProgileController:GetInfProfileUser = new GetInfProfileUser();

    editWindow: EditWindow=new EditWindow();
    editTags: TagWindow=new TagWindow();

    addTagButton: AddTagButton = new AddTagButton();

    tags: TagDTO[]|null=[];



    nickname: string|undefined="none";
    status: string|undefined="none";
    description: string|undefined="none";
    birthday: string|undefined="none";
    sex: string|undefined="none";
    link_to_avatar: string|undefined="none";

    userProfile: UserProfileDTO|null=null;

}

export default Profile;