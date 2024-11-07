import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import Controller from "../../../Controller/Controller.tsx";
import $ from "jquery";

import "./ButtonLogin.css"

class ButtonLogin extends Button {
    constructor() {
        super();
    }

    render() {

        return (
            <button id={this.id} className={this.className} onMouseLeave={this.handleMouseLeave}>
                <span className="log-in-text"  style={{color: 'white', fontWeight: 'bold', fontSize: '14px'}}>Log in</span>
            </button>
        );
    }

    readyToBeRendered() {

    }

    public setActionController(controller: Controller)
    {
        console.log(controller);

        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            controller.performe();
        });
    }


    private handleMouseLeave = () => {
        const button = document.getElementById(this.id);
        if (button) {
            button.classList.add("wobble-animation");
            button.addEventListener("animationend", () => {
                button.classList.remove("wobble-animation");
            }, { once: true });
        }
    };

}

export default ButtonLogin;