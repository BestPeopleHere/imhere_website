import {Component} from 'react';
import PropTypes from "prop-types";


class Example extends Component {
    constructor(props) {
        super(props);

        const { visualSetUp, troveController } = this.props;

        this.troveController=troveController;
        this.visualSetUp=visualSetUp;

        this.visualSetUp.setVisualObject(this);
    }

    render() {
        return (
            <div>
                <h1>Великие садоводы</h1>
                <p>Будьте аккуратны, на вас напала саранча</p>
            </div>
        );
    }

    componentDidMount() {
      //  this.controller.performe();
    }

    /**
     * @type {TroveController}
     */
    troveController = null;

    /**
     * @type {VisualSetUp}
     */
    VisualSetUp = null;

    /**
     * @type {Controller}
     */
    controller=null;
}

Example.propTypes = {
    visualSetUp: PropTypes.shape({
    }).isRequired,
    troveController: PropTypes.shape({
    }).isRequired,
};

export default Example;