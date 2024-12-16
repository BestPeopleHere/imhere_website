import Controller from "../Controller.tsx";
import Data from "../Data.tsx";
import UserFoundDTO from "../DTO/UserFoundDTO.tsx";

class SearchController extends Controller {
    async performe(): Promise<void> {
        console.log("SearchController");




        if (Data.visual?.appVisual?.search?.peopleCards) {

            console.log("search by: ", Data.visual.appVisual.search.request.getValue(),Data.visual.appVisual.search.tags )

            const userFound: UserFoundDTO[] = await Data.bc.searchUsers(Data.visual.appVisual.search.request.getValue(),Data.visual.appVisual.search.tags);
            Data.visual.appVisual.search.peopleCards.userFound = userFound;
        }

        Data.visual.appVisual?.search.showPeopleCards();

    }
}

export default SearchController;
