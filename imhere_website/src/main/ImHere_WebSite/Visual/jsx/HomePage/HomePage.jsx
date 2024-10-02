import PropTypes from "prop-types";
import VisualSetUp from "../VisualSetUp.jsx";

class HomePage extends VisualSetUp {
    constructor(props) {
        super(props, 'HomePage');

        const { visualSetUp, troveController } = this.props;

        this.troveController=troveController;
        this.visualSetUp=visualSetUp;

        this.visualSetUp.setVisualObject(this);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Желаю всем искателям конфетки преобрести ириски деток</p>
                </header>
            </div>
        );
    }

    componentDidMount()
    {
        //this.controller.performe();
    }


    /**
     * @type {TroveController}
     */
    troveController=null;

    /**
     * @type {VisualSetUp}
     */
    VisualSetUp=null;

    /**
     * @type {Controller}
     */
    controller=null;

    static TYPE = 'HomePage';
}

HomePage.propTypes = {
    visualSetUp: PropTypes.shape({
    }).isRequired,
    troveController: PropTypes.shape({
    }).isRequired,
};

export default HomePage;