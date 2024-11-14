import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import "./Avatar.css"

class Avatar extends VisualObject {
    constructor() {
        super();
    }

    render() {
        return (
                <img src={this.avatarUrl}
                      className="photo-element"
                />
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }

    changeAvatar(): void
    {

        this.avatarUrl=this.avatarUrl === "/rik.png" ? "/skala.png" : "/rik.png";
        this.forceUpdate();
    }

    avatarUrl: string="/rik.png";

}

export default Avatar;