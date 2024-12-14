import Controller from "../Controller.tsx";
import Data from "../Data.tsx";
import UserFoundDTO from "../DTO/UserFoundDTO.tsx";

class SearchController extends Controller {
    async performe(): Promise<void> {
        console.log("SearchController");

        const userFound: UserFoundDTO[] = await Data.bc.searchUsers(null,null);


        if (Data.visual?.appVisual?.search?.peopleCards) {
            Data.visual.appVisual.search.peopleCards.userFound = userFound;
        }

        Data.visual.appVisual?.search.showPeopleCards();

    }
}

export default SearchController;
