import './AuthReg.css';
import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import PasswordInput from './Elements/PasswordInPut.tsx';
import ButtonLogin from './Elements/ButtonLogin';
import ButtonCreate from './Elements/ButtonCreate';
import Button from "../ItcHyFeeL/DoneElements/Button.tsx";
import Element from "../ItcHyFeeL/Element.tsx";
import EmailInPut from "./Elements/EmailInPut.tsx";
import ErrorModal from "./Elements/ErrorModal.tsx";
import ErrorModel from "./Elements/ErrorModal.tsx";
import AuthController from "../../Controller/AuthController.tsx";

class Main extends VisualObject {
    constructor() {
        super();

        this.logButton=new Button();
        //this.logButton.setClassName('Button-2');
        this.error = new ErrorModal("все плохо");
        this.error.show();
        this.button = new Button();
        this.button.setText("test");
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
                <Element instance={this.button}></Element>
                <Element instance={new PasswordInput()} className='rectangle'/>
                <Element instance={new ButtonLogin()} className='log-in'/>
                <Element instance={new ButtonCreate()} className='create-account'/>
                <Element instance={this.error}/>

            </div>
        );
    }
    public readyToBeRendered() {
        super.readyToBeRendered();
        this.button.setActionController(new AuthController());
    }

    error : ErrorModel;
    logButton: Button;
    button: Button;
}

export default Main;
