import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'; // Оставьте Link, если планируете его использовать
import VisualSetUp from "./VisualSetUp.jsx";
import PropTypes from 'prop-types';
import {Button} from "../js/Button.js";
import HomePage from "./HomePage/HomePage.jsx";


class AppVisual extends VisualSetUp {


    constructor(props)
    {
        super(props,'AppVisual');

        const { visualSetUp, troveController } = this.props;

        this.troveController=troveController;
        this.visualSetUp=visualSetUp;

        this.visualSetUp.setVisualObject(this);
    }



    render() {
        return (
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <div>
                    <h2>Pokimon from this
                        component: {this.pokimon}</h2> {/* Отображает pokimon из этого класса */}
                    <button id="external-button">
                        Increase Pokimon
                    </button>
                </div>
                <Routes>
                    <Route path="/" element={<HomePage visualSetUp={{setVisualObject: this.setVisualObject.bind(this)}} troveController={this.troveController}/>}/>
                </Routes>
            </Router>
        );
    }

    componentDidMount()
    {
        const button = new Button();
        button.setActionListener('external-button',this.troveController.getButtonClickerController());

        console.log('update');
    }

    componentWillUnmount() {
        console.log('disable');
    }

    /**
     * @param {VisualSetUp} visualObject
     */
    setVisualObject(visualObject)
    {
        switch (visualObject.getClassName())
        {
            case 'HomePage': {
                this.homePage = visualObject;
                console.log("setVisualObject homePage");
                break;
            }
            default:
                console.log("Unknown class ", visualObject);
        }
    }

    setPokimon(value)
    {
        this.pokimon=value;
        this.forceUpdate();
    }

    pokimon=0;

    /**
     * @type {HomePage}
     */
    homePage=null;

    /**
     * @type {TroveController}
     */
    troveController=null;

    /**
     * @type {VisualSetUp}
     */

}

AppVisual.propTypes = {

    visualSetUp: PropTypes.shape({
    }).isRequired,
    troveController: PropTypes.shape({
    }).isRequired,
};



export default AppVisual;
