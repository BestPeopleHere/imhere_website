import './AuthReg.css';
import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import PasswordInput from './Elements/PasswordInPut.tsx';
import ButtonLogin from './Elements/ButtonLogin';
import ButtonCreate from './Elements/ButtonCreate';
import Button from "../ItcHyFeeL/DoneElements/Button.tsx";
import Element from "../ItcHyFeeL/Element.tsx";
import EmailInPut from "./Elements/EmailInPut.tsx";
import ErrorModal from "./Elements/ErrorModal.tsx";
import AuthController from "../../Controller/AuthController.tsx";
import RegController from "../../Controller/RegController.tsx";

class AuthReg extends VisualObject {
    constructor() {

        super();

        this.logButton=new ButtonLogin();
        this.createButton=new ButtonCreate();
        this.passwordInput=new PasswordInput();
        this.emailInput=new EmailInPut();
        //this.logButton.setClassName('Button-2');

        this.error = new ErrorModal("все плохо");
       // this.error.show("2222222222");
    }

    render() {
        return (
            <div className='main-container'>
                <span className='text'>ImHere</span>

                <div className='pic'>
                    <div className='pic-2'/>
                </div>

                <button className='Button-2'/>
                <div className='img-3'/>

                <Element instance={this.emailInput} className='Button'/>
                <Element instance={this.passwordInput} className='rectangle'/>

                <Element instance={this.logButton} className='log-in'/>
                <Element instance={this.createButton} className='create-account'/>

                <Element instance={this.button}/>

                <Element instance={this.error}/>

            </div>
        );
    }

    readyToBeRendered() {

        this.logButton.setActionController(new AuthController());
        this.createButton.setActionController(new RegController());

        this.passwordInput.setPlaceholder("Пароль");
        this.emailInput.setPlaceholder("Электронная почта");
    }

    drawError(errorMessage: string)
    {
        this.error.show(errorMessage);
    }

    logButton: ButtonLogin;
    createButton: ButtonCreate;
    button: Button=new Button();
    error : ErrorModal;
    passwordInput: PasswordInput;
    emailInput: EmailInPut;
}

export default AuthReg;