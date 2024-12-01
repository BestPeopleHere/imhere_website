import './Search.css';
import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import Element from "../ItcHyFeeL/Element.tsx";
import UserCard from "./UserCard/UserCard.tsx";
import ButtonUserCardController from "../../Controller/ButtonUserCardController.tsx";

class AuthReg extends VisualObject {
    constructor() {

        super();

        //this.logButton.setClassName('Button-2');

        // this.error.show("2222222222");
    }

    render() {
        return (
            <div className='main-container'>
                <span className='text'>ImHere</span>

                <Element instance={this.userCard} className='user-card'/>

            </div>
        );
    }

    // аааааааааа... ,,, ?????

    readyToBeRendered() {
        this.userCard.setActionController(new ButtonUserCardController());

    }

    public userCard: UserCard = new UserCard();
}

export default AuthReg;
