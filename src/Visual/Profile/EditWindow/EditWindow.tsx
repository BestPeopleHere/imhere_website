import styles from './EditWindow.module.css';
import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import Element from "../../ItcHyFeeL/Element";
import Status from "./Elements/Status";
import Input from "../../ItcHyFeeL/DoneElements/Input";
import About from "./Elements/About";
import NicknameInput from "./Elements/NicknameInput";
import SaveButton from "./Elements/SaveButton";
import ExitButton from "./Elements/ExitButton";
import EditProfileController from "../../../Controller/EditProfileController.tsx";
import BirthdayInput from "./Elements/BirthdayInput.tsx";
import GenderInput from "./Elements/GenderInput.tsx";
import UserProfileDTO from "../../../Controller/DTO/UserProfileDTO.tsx";
import GetInfForEditController from "../../../Controller/GetInfForEditController.tsx";

class EditWindow extends VisualObject {
    constructor() {
        super();
        this.nicknameInput = new NicknameInput();
        this.birthdayInput = new BirthdayInput();
        //this.birthdayInput = new NameInput();
        this.genderInput = new GenderInput();
        this.status = new Status();
        this.about = new About();
        this.save = new SaveButton();
        this.exit = new ExitButton();


    }

    render() {
        return (
            <div className={styles['main-container']}>

                <span className={styles.name}>Никнейм</span>
                <Element instance={this.nicknameInput} className={styles['rectangle-1']}/>

                <span className={styles.name}>Дата рождения</span>
                <Element instance={this.birthdayInput} className={styles['rectangle-4']}/>

                <span className={styles.name}>Пол</span>
                <Element instance={this.genderInput} className={styles['rectangle-4']}/>

                <span className={styles.name}>Статус</span>
                <Element instance={this.status} className={styles['rectangle-4']}/>

                <span className={styles.name}>Описание</span>
                <Element instance={this.about} className={styles['rectangle-4']}/>

                <Element instance={this.save} className={styles.button}/>
                </div>
                );
            }

    readyToBeRendered() {

        this.save.setActionController(new EditProfileController());

        const get:GetInfForEditController = new GetInfForEditController();
        get.performe();
    }

    setInf(userProfile: UserProfileDTO | null)
    {
        console.log("э ",userProfile);

        this.nicknameInput.setValue(userProfile?.nickname);
        this.status.setValue(userProfile?.status);
        this.about.setValue(userProfile?.description);
        this.birthdayInput.setValue(userProfile?.birthday);
        this.genderInput.setValue(userProfile?.sex);

        this.forceUpdate();
    }

    nicknameInput: Input;
    birthdayInput: Input;
    genderInput: Input;
    status: Status;
    about: About;
    save: SaveButton;
    exit: ExitButton;
}

export default EditWindow;