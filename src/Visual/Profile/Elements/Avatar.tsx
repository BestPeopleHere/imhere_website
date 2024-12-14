import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import "./Avatar.css"

import defaultAvatar from "../../../assets/avatar/default.jpg";


class Avatar extends VisualObject {
    constructor() {
        super();
    }

    render() {
        return (
                <img src={this.avatarUrl ? this.avatarUrl : defaultAvatar}
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

    avatarUrl: string|undefined="/default.jpg";

}

export default Avatar;