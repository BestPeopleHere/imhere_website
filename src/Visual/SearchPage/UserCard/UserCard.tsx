import './UserCard.css';
import Element from "../../ItcHyFeeL/Element.tsx";
import UserCardAvatar from "./CardElements/UserCardAvatar.tsx";
import UserCardStatus from "./CardElements/UserCardStatus.tsx";
import UserFoundDTO from "../../../Controller/DTO/UserFoundDTO.tsx";
import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import ToOtherProfileController from "../../../Controller/Search/ToOtherProfileController.tsx";

class UserCard extends VisualObject {

    constructor(userFound:UserFoundDTO) {
        super();
        // this.tags = Array.from({ length: 5 }, (_, index) => ({
        //     id: index,
        //     tag_name: `Тег ${index + 1}`,
        // }));

        console.log("cool!");


        this.userAvatar=new UserCardAvatar(userFound.link_to_avatar);
        this.userStatus=new UserCardStatus(userFound.description);

        this.id = userFound.id;
        this.description=userFound.description;
        this.nickname=userFound.nickname;

    }

    handleCardClick() {
        const con: ToOtherProfileController = new ToOtherProfileController();


        //console.log("id - "+this.id);
        con.performe(this.id);
        // Здесь можно выполнять любые действия
    }

    render() {
 // проверяем, что данные корректны
        return (
            <div className="main-container-8" onClick={() => this.handleCardClick()}>
                <div className='rectangle-8'/>
                <Element instance={this.userAvatar} className='avatar-user-card'/>
                <Element instance={this.userStatus} className='status-user-card'/>
                <span className='nickname-user-card'>{this.nickname}</span>
                <span className='status-user-card'>{this.description}</span>

                {/*<div className="tags-container">*/}
                {/*    {this.tags.map((tag) => (*/}
                {/*        <Element*/}
                {/*            key={tag.id}*/}
                {/*            instance={new UserCardTag({label: tag.tag_name})}*/}
                {/*            className="tag"*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</div>*/}

            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }

    id: number;

    public userAvatar: UserCardAvatar;
    public userStatus: UserCardStatus;

    description: string|undefined = undefined;
    nickname: string|undefined = undefined;
}

export default UserCard;
