import './EditWindow.css';
import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import Element from "../ItcHyFeeL/Element";
import Status from "./Elements/Status";
import Input from "../ItcHyFeeL/DoneElements/Input";
import About from "./Elements/About";
import NameInput from "./Elements/NameInput";
import NicknameInput from "./Elements/NicknameInput";
import BirthdayInput from "./Elements/BirthdayInput";
import GenderInput from "./Elements/GenderInput";
import SaveButton from "./Elements/SaveButton";
import ExitButton from "./Elements/ExitButton";

class EditWindow extends VisualObject {
    constructor() {
        super();
       /* this.nicknameInput=new Input();
        this.nameInput=new Input();
        this.birthdayInput=new Input();
        this.genderInput=new Input(); */
        this.nicknameInput=new NicknameInput();
        this.nameInput=new NameInput();
        this.birthdayInput=new BirthdayInput();
        this.genderInput=new GenderInput();
        this.status=new Status();
        this.about=new About();
        this.save=new SaveButton();
        this.exit=new ExitButton();
    }

    render() {
        return (
            <div className='main-container'>

                <Element instance={this.exit} className='exit'/>

                <span className='name'>Никнейм</span>
                <Element instance={this.nicknameInput} className='rectangle-1'/>

                <span className='name'>Имя</span>
                <Element instance={this.nameInput} className='rectangle-1'/>

                <span className='name'>Дата рождения</span>
                <Element instance={this.birthdayInput} className='rectangle-1'/>

                <span className='name'>Пол</span>
                <Element instance={this.genderInput} className='rectangle-1'/>

                <span className='name'>Статус</span>
                <Element instance={this.status} className='rectangle-4'/>

                <span className='name'>Описание</span>
                <Element instance={this.about} className='rectangle-5'/>

                <Element instance={this.save} className='button'/>
            </div>
        );
    }

    readyToBeRendered() {
    }

    nicknameInput: Input;
    nameInput: Input;
    birthdayInput: Input;
    genderInput: Input;
    status: Status;
    about
    save: SaveButton;
    exit: ExitButton;
}

export default EditWindow;