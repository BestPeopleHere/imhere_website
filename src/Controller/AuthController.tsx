import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class AuthController extends Controller {
    async performe(): Promise<void> {
        console.log("performe AuthController");

        try {
            if (await Data.bc.authUser(Data.visual.appVisual?.authReg.emailInput.getValue(),
                Data.visual.appVisual?.authReg.passwordInput.getValue())==null)
            {
                Data.visual.appVisual?.authReg.drawError("Брат, такой почты мы не знаем и/или в твоем прекрасном пароле опечатка. Точно сказать не могу, сорри");

            }
            else
            {
                Data.visual.toMain();
            }

        }catch (e) {
            // console.log(Data.visual.appVisual?.authReg.passwordInput.getValue());
            // console.log(Data.visual.appVisual?.authReg.emailInput.getValue());
            Data.visual.appVisual?.authReg.drawError("Брат, такой почты мы не знаем и/или в твоем прекрасном пароле опечатка. Точно сказать не могу, сорри");
        }
        // const pokimon = await Data.bc.getPokimon();
        // console.log("pokimon: ", pokimon);
        // Data.visual.drawPokimon(pokimon);
    }
}

export default AuthController;