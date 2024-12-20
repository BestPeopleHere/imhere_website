import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class RegController extends Controller {
    async performe(): Promise<void> {
        console.log("performe RegController");


        try {
            if(Data.visual.appVisual?.authReg.emailInput.getValue()==="" || Data.visual.appVisual?.authReg.passwordInput.getValue()===""||await Data.bc.registerUser(Data.visual.appVisual?.authReg.emailInput.getValue(),
                Data.visual.appVisual?.authReg.passwordInput.getValue())==null)
            {
                Data.visual.appVisual?.authReg.drawError(`\tЛибо пользователь с такой почтой уже есть, либо данные не подходят по формату полей. Пожалуйста, убедитесь, что ваш пароль соответствует следующим требованием: <br><br>
                
                <div class="centered-list">
        <ul>
            <li>1. Только латинские символы</li>
            <li>2. Минимум 8 символов</li>
            <li>3. Введена электронная почта</li>
        </ul>
    </div>`);
            }
            else
            {
                await Data.bc.createUserProfile();
                Data.visual.toMain();
            }

        }catch (e) {

            Data.visual.appVisual?.authReg.drawError(`\tЛибо пользователь с такой почтой уже есть, либо данные не подходят по формату полей. Пожалуйста, убедитесь, что ваш пароль соответствует следующим требованием: <br><br>
                
                <div class="centered-list">
        <ul>
            <li>1. Только латинские символы</li>
            <li>2. Минимум 8 символов</li>
            <li>3. Введена электронная почта</li>
        </ul>
    </div>`);
        }

        //await Data.bc.registerUser("example@gmail.com","123456789");
    }
}

export default RegController;
