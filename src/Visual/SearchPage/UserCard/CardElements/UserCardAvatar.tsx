import VisualObject from "../../../ItcHyFeeL/VisualObject.tsx";
import "./UserCardAvatar.css";

class UserCardAvatar extends VisualObject {
    constructor(linkToUrl: string|undefined) {
        super();
        this.linkToUrl = linkToUrl;
    }

    render() {
        return (
            <div className="card-avatar">
                {this.linkToUrl ? (
                    <img src={this.linkToUrl} alt="Avatar" className="avatar-image"/>
                ) : (
                    <div className="placeholder-avatar">No Avatar</div>
                )}
            </div>
    )
        ;
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }


    linkToUrl: string | undefined;
}

export default UserCardAvatar;