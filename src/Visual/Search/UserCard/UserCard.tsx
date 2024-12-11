import './UserCard.css';
import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import Element from "../../ItcHyFeeL/Element.tsx";
import UserCardAvatar from "./CardElements/UserCardAvatar.tsx";
import $ from "jquery";
import UserCardStatus from "./CardElements/UserCardStatus.tsx";
import UserCardTag from "./CardElements/UserCardTag.tsx";
import GetInfProfileUser from "../../../Controller/GetInfProfileUser.tsx";

class UserCard extends Button {
    private tags: { tag_name: string; id: number }[];

    constructor() {
        super();
        this.tags = Array.from({ length: 5 }, (_, index) => ({
            id: index,
            tag_name: `Тег ${index + 1}`,
        }));
    }

    render() {
        console.log(this.tags); // проверяем, что данные корректны
        return (
            <div className="main-container-8">
                <div className='rectangle-8'/>
                <Element instance={this.userAvatar} className='avatar-user-card'/>
                <Element instance={this.userStatus} className='status-user-card'/>
                <span className='nickname-user-card'>Nickname</span>
                <span className='status-user-card'>Статус</span>

                <div className="tags-container">
                    {this.tags.map((tag) => (
                        <Element
                            key={tag.id}
                            instance={new UserCardTag({label: tag.tag_name})}
                            className="tag"
                        />
                    ))}
                </div>

            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }

    public setActionController(controller: GetInfProfileUser  ) {
        console.log(controller);

        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            controller.performe();
        });
    }

    public userAvatar: UserCardAvatar = new UserCardAvatar();
    public userStatus: UserCardStatus = new UserCardStatus();
}

export default UserCard;
