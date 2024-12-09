import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import $ from "jquery";
import '../SearchPage.css';
import FilterSearchButtonController from "../../../Controller/FilterSearchButtonController.tsx";

import TagSearch from "./TagSearch";

class FilterButton extends Button {
    private tagSearch: TagSearch;

    constructor() {
        super();
        this.tagSearch = new TagSearch(`${this.id}-tag-search`); // Создаём экземпляр TagSearch
    }

    render() {
        return (
            <div>
                <span id={this.id} className="filter-button"></span>
                <div id={`${this.id}-tag-frame`} className="tag-frame hidden"></div>
                <button id={`${this.id}-tag-search-button`} className="tag-search-button hidden"></button>
                {this.tagSearch.render()}
            </div>
        );
    }

    readyToBeRendered() {
        this.tagSearch.attachEvents(); // Привязываем события к элементам окна
    }

    public setActionController(controller: FilterSearchButtonController) {
        console.log(controller);

        this.controller = controller;

        $(`#${this.id}`).off().on('click', () => {
            const tagFrame = $(`#${this.id}-tag-frame`);
            const tagSearchButton = $(`#${this.id}-tag-search-button`);

            tagFrame.toggleClass("hidden");
            if (!tagFrame.hasClass("hidden")) {
                tagSearchButton.removeClass("hidden");
            } else {
                tagSearchButton.addClass("hidden");
            }

            controller.performe();
        });

        $(`#${this.id}-tag-search-button`).off().on('click', () => {
            this.tagSearch.toggle(); // Показываем/скрываем окно TagSearch
        });
    }
}

export default FilterButton;

