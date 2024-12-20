import Button from "../../ItcHyFeeL/DoneElements/Button.tsx";
import $ from "jquery";
import '../SearchPage.css';
import FilterSearchButtonController from "../../../Controller/FilterSearchButtonController.tsx";

import TagSearch from "./TagSearch";

import AddTagsButton from "./AddTagsButton.tsx";

import ShowTagWindowOnSearch from "../../../Controller/Search/ShowTagWindowOnSearch.tsx";


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



                {/*{this.isFilter && (*/}
                {/*    <div className="tags-container-111">*/}
                {/*        {this.tags.map((tag, index) => (*/}
                {/*            <Element*/}
                {/*                key={index} // Уникальный ключ для каждого тега*/}
                {/*                instance={new Tag(tag.tag_name)}*/}
                {/*            />*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*)}*/}

                <button id={`${this.id}-tag-search-button`} className="tag-search-button hidden"></button>
                {this.tagSearch.render()}
            </div>
        );
    }

    readyToBeRendered() {
        this.tagSearch.attachEvents(); // Привязываем события к элементам окна
        this.addTagsButton.setActionController(new ShowTagWindowOnSearch());
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

        $(`#${this.id}-tag-search-button`).off().on('click', () =>
        {
            const showTagWindowOnSearch:ShowTagWindowOnSearch= new ShowTagWindowOnSearch();

            showTagWindowOnSearch.performe();

          //  this.tagSearch.toggle(); // Показываем/скрываем окно TagSearch
        });
    }


    addTagsButton: AddTagsButton= new AddTagsButton();

    //public tags: TagDTO[]=[];
    isFilter: boolean = false;

}

export default FilterButton;

