import {Component} from "react";

class VisualSetUp extends Component {

    constructor(props) {
        super(props);
    }

    setVisualObject(visualObject)
    {
        console.log("you are nice a platypus ", visualObject);
    }

    getClassName()
    {
        return this.constructor.name;
    }

    type=0;
}

export default VisualSetUp;