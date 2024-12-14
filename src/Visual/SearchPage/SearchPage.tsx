import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import './SearchPage.css';
import Element from "../ItcHyFeeL/Element.tsx";
import PeopleButton from "./Elements/PeopleButton.tsx";
import PeopleSearchController from "../../Controller/PeopleSearchController.tsx";
import ProjectSearchController from "../../Controller/ProjectSearchController.tsx";
import ProjectButton from "./Elements/ProjectButton.tsx";
import BackButton from "./Elements/BackButton.tsx";
import ResultButton from "./Elements/ResultButton.tsx";
import FilterButton from "./Elements/FilterButton.tsx";
import FilterSearchButtonController from "../../Controller/FilterSearchButtonController.tsx";
import BackSearchButtonController from "../../Controller/BackSearchButtonController.tsx";
import ShowResultSearchButtonController from "../../Controller/ShowResultSearchButtonController.tsx";
import PeopleCards from "./PeopleCards/PeopleCards.tsx";
import Request from "./Elements/Request.tsx";
import UserCard from "./UserCard/UserCard.tsx";
import SearchController from "../../Controller/Search/SearchController.tsx";



class SearchPage extends VisualObject {
    constructor() {
        super();
        this.peopleButton = new PeopleButton();
        this.projectButton = new ProjectButton();
        this.backButton = new BackButton();
        this.resultButton = new ResultButton();
        this.filterButton = new FilterButton();
        this.request = new Request();

        // Связываем кнопки
        this.peopleButton.deactivateOther = () => this.projectButton.deactivate();
        this.projectButton.deactivateOther = () => this.peopleButton.deactivate();
    }

    showPeopleCards = () => {
        this.isShowPeopleCards=true;

        this.forceUpdate();
    }

    hidePeopleCards = () => {
        this.isShowPeopleCards=false;

        this.forceUpdate();
    }

    render() {
        return (

            <div className="main-container">
                <div className="scroll-container">
                    <div className="search-imhere-logo">ImHere</div>
                    <div className="search-field">
                        <Element instance={this.request} className="search-field"/>
                    </div>
                    {this.isShowPeopleCards && <div onClick={this.hidePeopleCards}/>}
                    {this.isShowPeopleCards && (
                        <Element instance={this.peopleCards} className="card-background"/>
                    )}
                    <Element instance={this.peopleButton} className="people-search-button"/>
                    <Element instance={this.projectButton} className="project-search-button"/>
                    <Element instance={this.backButton} className="back-button"/>
                    <Element instance={this.resultButton} className="result-button"/>
                    <Element instance={this.filterButton} className="filter-button"/>
                </div>
            </div>
        );
    }

    readyToBeRendered() {
        this.peopleButton.setActionController(new PeopleSearchController());
        this.projectButton.setActionController(new ProjectSearchController());
        this.backButton.setActionController(new BackSearchButtonController());
        this.resultButton.setActionController(new SearchController());
        this.filterButton.setActionController(new FilterSearchButtonController());

    }

    peopleButton: PeopleButton;
    projectButton: ProjectButton;
    backButton: BackButton;
    resultButton: ResultButton;
    filterButton: FilterButton;
    request: Request;
    isShowPeopleCards: boolean = false;
    peopleCards: PeopleCards = new PeopleCards();



}


export default SearchPage;