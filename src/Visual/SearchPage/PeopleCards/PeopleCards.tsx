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
                {this.userCards.map((userCard, index) => (
                    <div key={index} className="card-wrapper">
                        <Element instance={userCard} />
                    </div>
                ))}
            </div>
        );
    }


    setUsers(users: UserFoundDTO[]) {
        this.userFound = users;
        this.userCards = users.map(user => new UserCard(user)); // Создаем массив объектов UserCard
        this.userCards.forEach(userCard => userCard.forceUpdate());
        this.forceUpdate(); // Обновляем интерфейс
    }

    readyToBeRendered() {

        //Запускается при подготовке к работе.
    }
/*nickname: Nickname;*/

    public userFound: UserFoundDTO[]|undefined = undefined;
    private userCards: UserCard[]=[];

}

export default PeopleCards;