import './Reg.css';
import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import PasswordInput from './Elements/PasswordInPut.tsx';
import ButtonCreate from './Elements/ButtonCreate';
import Button from "../ItcHyFeeL/DoneElements/Button.tsx";
import Element from "../ItcHyFeeL/Element.tsx";
import EmailInPut from "./Elements/EmailInPut.tsx";
import NicknameInput from "./Elements/NicknameInput.tsx";
//import BirthDayInput from "./Elements/BirthDayInput.tsx";
import GenderSelector from "./Elements/MaleOrFemale.tsx";

class Main extends VisualObject {

    constructor() {
        super();

        this.logButton=new Button();
        //this.logButton.setClassName('Button-2');
    }

    render() {
        return (
            <div className='main-container'>
                <span className='text'>ImHere</span>

                <Element instance={new NicknameInput()} className=''/>

                <Element instance={new GenderSelector()} className='selected-gender'/>

                <Element instance={new EmailInPut()} className='Button'/>

                <Element instance={new PasswordInput()} className='rectangle'/>

                <Element instance={new ButtonCreate()} className='create-account'/>

            </div>
        );
    }

    logButton: Button;
}

export default Main;
