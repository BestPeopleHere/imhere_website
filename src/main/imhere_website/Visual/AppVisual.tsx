import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import HomePage from "./HomePage/HomePage";

import Controller from "../Controller/Controller.tsx";
import VisualObject from "./ItcHyFeeL/VisualObject.tsx";
import Element from "./ItcHyFeeL/Element.tsx";
import Button from "./ItcHyFeeL/DoneElements/Button.tsx";
import ButtonClickerController from "../Controller/ButtonClickerController.tsx";
import AuthReg from "./AuthReg/AuthReg.tsx";
import Reg from "./Reg/Reg.tsx";
import Profile from "./Profile/Profile";
import EditPage from "./Profile/EditPage/EditPage";

class AppVisual extends VisualObject {
    constructor() {
        super();
        this.homePage = new HomePage();
        this.profile = new Profile();
        this.editPage = new EditPage();

    }

    render() {
        return (
            <Router>

                <Element instance={this.button}/>
                {/*<Element instance={new Button()}/>*/}

                <Routes>
                    <Route path="/authreg" element={<Element instance={this.reg} />} />
                    <Route path="/" element={<Element instance={this.authReg} />} />
                    <Route path="/home" element={<Element instance={this.homePage} />} />
                    <Route path="/profile" element={<Element instance={this.profile} />} />
                    <Route path="/profile/edit" element={<Element instance={this.editPage} />} />
                </Routes>
            </Router>
        );
    }

    readyToBeRendered() {
        if (this.controllerUpdate) {
            this.controllerUpdate.performe();
        }

        this.button.setActionController(new ButtonClickerController());
        this.button.setText("test to connect with backend");

        console.log('update');
    }

    componentWillUnmount() {
        console.log('disable');
    }

     // setPokimon(value: number) {
     //    console.log(value);
     //  //  this.pokimon = value;
     //    this.forceUpdate();
     // }




    private button: Button = new Button();

    private controllerUpdate: Controller | null = null;
    //private pokimon: number = 0;

    // Все страницы
    public homePage: HomePage;
    public profile: Profile;
    public editPage: EditPage;

    public authReg: AuthReg=new AuthReg();
    public reg: Reg=new Reg();


  //  navigate: NavigateFunction = useNavigate();
}

export default AppVisual;
