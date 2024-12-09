import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import './PeopleCards.css';
{/*import Nickname from "../../SearchPage/PeopleCards/Elements/Nickname.tsx";*/}
{/*import Element from "../../ItcHyFeeL/Element.tsx";*/}

class PeopleCards extends VisualObject {
    constructor() {
        super();
        /*this.nickname = new Nickname();*/

    }

    render() {
        return (
            <div>
                <div className='card-nickname'>nickname</div>
                {/*<Element instance={this.nickname} className='card-nickname'/>*/}
                <div className='card-avatar'></div>
                <div className='card-status'>Статус</div>
            </div>
        );
    }


    readyToBeRendered() {

        //Запускается при подготовке к работе.
    }
/*nickname: Nickname;*/

}

export default PeopleCards;