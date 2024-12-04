import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class RegController extends Controller {
    async performe(): Promise<void> {
        console.log("performe RegController");


        try {
            if(await Data.bc.registerUser(Data.visual.appVisual?.authReg.emailInput.getValue(),
                Data.visual.appVisual?.authReg.passwordInput.getValue())==null)
            {
                Data.visual.appVisual?.authReg.drawError(`Либо ты опоздал, и пользователь с такой почтой уже есть, либо данные не подходят по формату полей.
                Пожалуйста, убедись, уважаемый пользователь, что твой прекрасный пароль соответствует следующим требованиям: <br><br>
                
                <div class="centered-list">
        <ul>
            <li>1. Только латинские символы</li>
            <li>2. Не менее одной заглавной буквы</li>
            <li>3. Не менее одной цифры</li>
            <li>4. Не менее одного специального символа</li>
        </ul>
    </div>`);
            }
            else
            {
                await Data.bc.createUserProfile();
                Data.visual.toMain();
            }

        }catch (e) {

            Data.visual.appVisual?.authReg.drawError(`Либо ты опоздал, и пользователь с такой почтой уже есть, либо данные не подходят по формату полей.
                Пожалуйста, убедись, уважаемый пользователь, что твой прекрасный пароль соответствует следующим требованиям: <br><br>
                
                <div class="centered-list">
        <ul>
            <li>1. Только латинские символы</li>
            <li>2. Не менее одной заглавной буквы</li>
            <li>3. Не менее одной цифры</li>
            <li>4. Не менее одного специального символа</li>
        </ul>
    </div>`);
        }

        //await Data.bc.registerUser("example@gmail.com","123456789");
    }
}

export default RegController;
