import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import './PeopleCards.css';
import UserFoundDTO from "../../../Controller/DTO/UserFoundDTO.tsx";
import UserCard from "../UserCard/UserCard.tsx";
{/*import Nickname from "../../SearchPage/PeopleCards/Elements/Nickname.tsx";*/}
import Element from "../../ItcHyFeeL/Element.tsx";

class PeopleCards extends VisualObject {
    constructor() {
        super();
        /*this.nickname = new Nickname();*/

    }

    render() {
        return (
            <div className="cards-container">
                {this.userFound?.map((user, index) => (
                    <div key={index} className="card-wrapper">
                        <Element instance={new UserCard(user)} />
                    </div>
                ))}
            </div>
        );
    }


    readyToBeRendered() {

        //Запускается при подготовке к работе.
    }
/*nickname: Nickname;*/

    public userFound: UserFoundDTO[]|undefined = undefined;

}

export default PeopleCards;