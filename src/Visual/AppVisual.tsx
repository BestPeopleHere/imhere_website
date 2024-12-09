import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import HomePage from "./HomePage/HomePage";

import Controller from "../Controller/Controller.tsx";
import VisualObject from "./ItcHyFeeL/VisualObject.tsx";
import Element from "./ItcHyFeeL/Element.tsx";
import Button from "./ItcHyFeeL/DoneElements/Button.tsx";
import AuthReg from "./AuthReg/AuthReg.tsx";
import Profile from "./Profile/Profile.tsx";
import SearchPage from "./SearchPage/SearchPage.tsx";
import EditWindow from "./Profile/EditWindow/EditWindow.tsx";
import Example from "./Example/Example.tsx";
import ToSauna from "../Controller/ToSauna.tsx";

class AppVisual extends VisualObject {
    constructor() {
        super();
        this.homePage = new HomePage();


    }

    render() {
        return (
            <Router>

                <Element instance={this.button}/>
                {/*<Element instance={new Button()}/>*/}

                <Routes>
                    <Route path="/" element={<Element instance={this.authReg} />} />
                    <Route path="/sauna" element={<Element instance={this.sauna} />} />
                    <Route path="/home" element={<Element instance={this.homePage} />} />
                    <Route path="/profile" element={<Element instance={this.profile} />} />
                    <Route path="/profile/edit" element={<Element instance={this.editWindow} />} />
                    <Route path="/search" element={<Element instance={this.search} />} />

                </Routes>
            </Router>
        );
    }

    readyToBeRendered() {
        if (this.controllerUpdate) {
            this.controllerUpdate.performe();
        }

        //this.button.setActionController(new ButtonClickerController());
        this.button.setActionController(new ToSauna());
        this.button.setText("test to connect with backend");

        this.handlePopState = this.handlePopState.bind(this);

        window.removeEventListener("popstate", this.handlePopState);
        window.addEventListener("popstate", this.handlePopState);

        console.log('update');
    }

    handlePopState = () => {
        window.location.reload();
    };

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
    public sauna: Example=new Example();
    public authReg: AuthReg=new AuthReg();
    public profile: Profile=new Profile();
    public editWindow: EditWindow=new EditWindow();
    public search: SearchPage=new SearchPage();


    //  navigate: NavigateFunction = useNavigate();
}

export default AppVisual;
