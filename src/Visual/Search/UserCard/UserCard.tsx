import './UserCard.css';
import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import Element from "../../ItcHyFeeL/Element.tsx";
import UserCardAvatar from "./CardElements/UserCardAvatar.tsx";
import $ from "jquery";
import GetInfProfileUser from "../../../Controller/GetInfProfileUser.tsx";
import UserCardStatus from "./CardElements/UserCardStatus.tsx";
import UserCardTag from "./CardElements/UserCardTag.tsx";

class UserCard extends Button {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="main-container-8">
                <div className='rectangle-8'/>
                <Element instance={this.userAvatar} className='avatar-user-card'/>
                <Element instance={this.userStatus} className='status-user-card'/>
                <span className='nickname-user-card'>anechka.s</span>
                <span className='status-user-card'>Статус</span>

                <Element instance={this.userTag} className='tag'/>



                <button className='rectangle-button'/>
                <button className='rectangle-button-2'/>
                <button className='rectangle-button-3'/>
                <button className='rectangle-button-4'/>
                <button className='rectangle-button-5'/>
                <span className='tag'>Тег</span>
                <span className='tag-6'>Тег</span>
                <span className='tag-7'>Тег</span>
                <span className='tag-8'>Тег</span>
                <span className='tag-9'>Тег</span>

            </div>
        )
            ;
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.

    }

    public setActionController(controller: GetInfProfileUser)
    {
        console.log(controller);

        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            controller.performe();
        });
    }

    public userAvatar: UserCardAvatar = new UserCardAvatar();
    public userStatus: UserCardStatus = new UserCardStatus();
    public userTag: UserCardTag = new UserCardTag();
}

export default UserCard;
