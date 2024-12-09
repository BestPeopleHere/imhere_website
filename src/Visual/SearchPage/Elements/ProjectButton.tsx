import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import $ from "jquery";
import ProjectSearchController from "../../../Controller/ProjectSearchController.tsx";
import '../SearchPage.css';

class ProjectButton extends Button {
    private activeClass: string;

    constructor() {
        super();
        this.activeClass = "active-button";
    }

    render() {
        return (
            <div>
                <span id={this.id} className="project-search-button">Проекты</span>
            </div>
        );
    }

    setActionController(controller: ProjectSearchController) {
        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            controller.performe();
            this.onClick();
        });
    }

    onClick() {
        this.activate();
        if (this.deactivateOther) {
            this.deactivateOther();
        }
    }

    activate() {
        $(`#${this.id}`).addClass(this.activeClass);
    }

    deactivate() {
        $(`#${this.id}`).removeClass(this.activeClass);
    }

    // Метод вызывается для подготовки кнопки к работе
    readyToBeRendered() {
        this.activate(); // Установить кнопку активной при инициализации
    }


    public deactivateOther?: () => void;
}

export default ProjectButton;
