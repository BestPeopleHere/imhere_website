import './AuthReg.css';
import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import PasswordInput from './Elements/PasswordInPut.tsx';
import ButtonLogin from './Elements/ButtonLogin';
import ButtonCreate from './Elements/ButtonCreate';
import Button from "../ItcHyFeeL/DoneElements/Button.tsx";
import Element from "../ItcHyFeeL/Element.tsx";
import EmailInPut from "./Elements/EmailInPut.tsx";

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

                <Element instance={new EmailInPut()} className='Button'/>

                <div className='pic'>
                    <div className='pic-2'/>
                </div>

                <button className='Button-2'/>
                <div className='img-3'/>

                <Element instance={new PasswordInput()} className='rectangle'/>
                <Element instance={new ButtonLogin()} className='log-in'/>
                <Element instance={new ButtonCreate()} className='create-account'/>

            </div>
        );
    }

    logButton: Button;
}

export default Main;
