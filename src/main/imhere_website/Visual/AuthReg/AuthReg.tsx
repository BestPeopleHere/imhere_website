import './AuthReg.css';
import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import EmailInput from "./Elements/EmailInPut.tsx";
import PasswordInput from './Elements/PasswordInPut.tsx';
import ButtonLogin from './Elements/ButtonLogin';
import ButtonCreate from './Elements/ButtonCreate';
import Element from "../ItcHyFeeL/Element.tsx";
import RegController from '../../Controller/RegController.tsx';
import ErrorWindow from './Elements/ErrorWindow.tsx';


class Main extends VisualObject {
    private email: string = '';
    private password: string = '';
    private showError: boolean = false;
    private errorMessage: string = '';

    constructor() {
        super();
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    render() {
        return (
            <div className='main-container'>
                <span className='text'>ImHere</span>

                <Element instance={new EmailInput(this.handleEmailChange)} className='Button' />
                <div className='pic'>
                    <div className='pic-2' />
                </div>
                <button className='Button-2' />
                <div className='img-3' />
                <Element instance={new PasswordInput(this.handlePasswordChange)} className='rectangle' />
                <Element instance={new ButtonLogin()} className='log-in' />
                <Element instance={new ButtonCreate(() => this.handleCreateAccount())} className='create-account' />

                {this.showError && (
                    <ErrorWindow
                        message={this.errorMessage}
                    />
                )}
            </div>
        );
    }

    private handleEmailChange(email: string) {
        this.email = email;
    }

    private handlePasswordChange(password: string) {
        this.password = password;
    }

    private handleCreateAccount() {
        const regController = new RegController(this.email, this.password);

        // Проверяем валидацию перед выполнением запроса
        if (!regController.isEmailValid() || !regController.isPasswordValid()) {
            this.showError = true;
            this.errorMessage =
                `Либо ты опоздал, и пользователь с такой почтой уже есть, либо данные не подходят по формату полей. 
                Пожалуйста, убедись, уважаемый пользователь, что твой прекрасный пароль соответствует следующим требованиям: 
                
                1. Только латинские символы 
                2. Не менее одной заглавной буквы 
                3. Не менее одной цифры 
                4. Не менее одного специального символа`;

            this.forceUpdate(); // Обновляем  для отображения ошибки
        } else {
            this.setActionController(); // Переходим к отправке запроса, если валидация пройдена
        }
    }

    private setActionController() {
        const regController = new RegController(this.email, this.password);
        regController.performe()
            .then(() => {
                this.showError = false; // Скрываем окно ошибок при успехе
                this.forceUpdate(); // Обновляем компонент
            })
            .catch(() => {
                this.showError = true;
                this.errorMessage = `Либо ты опоздал, и пользователь с такой почтой уже есть, либо данные не подходят по формату полей. 
                    Пожалуйста, убедись, уважаемый пользователь, что твой прекрасный пароль соответствует следующим требованиям: 
                    
                    1. Только латинские символы 
                    2. Не менее одной заглавной буквы 
                    3. Не менее одной цифры 
                    4. Не менее одного специального символа`;
                this.forceUpdate(); // Обновляем компонент
            });
    }
}

export default Main;
