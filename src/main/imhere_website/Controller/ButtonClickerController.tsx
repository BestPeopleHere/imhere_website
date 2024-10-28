import Data from "./Data.tsx";
import Controller from "./Controller.tsx";
import ErrorModal from "../Visual/AuthReg/Elements/ErrorModal.tsx";

class ButtonClickerController extends Controller {
    async performe(): Promise<void> {
        console.log("performe ButtonClickerController");
        try {
            await Data.bc.addPokimon();
        }catch (error) {
            console.error(error);
            const errorMessage = "Либо ты опоздал, и пользователь с такой почтой уже есть, либо данные не подходят по формату полей. Пожалуйста, убедись, что твой пароль соответствует требованиям."; // Сообщение об ошибке
            // const errorModal = new ErrorModal(errorMessage);
            Data.visual.drawError(errorMessage);
        }

        const pokimon = await Data.bc.getPokimon();
        console.log("pokimon: ", pokimon);
        Data.visual.drawPokimon(pokimon);
    }
}

export default ButtonClickerController;
