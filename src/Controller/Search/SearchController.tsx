import Controller from "../Controller.tsx";
import Data from "../Data.tsx";
import UserFoundDTO from "../DTO/UserFoundDTO.tsx";

class SearchController extends Controller {
    async performe(): Promise<void> {
        console.log("SearchController");

        if (Data.visual?.appVisual?.search?.peopleCards) {

            if (Data.visual.appVisual.search.peopleCards.userFound==undefined || Data.visual.appVisual.search.peopleCards.userFound.length <= 1) {

            console.log("search by: ", Data.visual.appVisual.search.request.getValue(), Data.visual.appVisual.search.tags)

            const userFound: UserFoundDTO[] = await Data.bc.searchUsers(Data.visual.appVisual.search.request.getValue(), Data.visual.appVisual.search.tags);
          //  Data.visual.appVisual.search.peopleCards.userFound=[];
         //   Data.visual.appVisual.search.peopleCards.forceUpdate();
           // Data.visual.appVisual.search.peopleCards.userFound = userFound;

                Data.visual.appVisual.search.peopleCards.setUsers(userFound);

            Data.visual.appVisual.search.peopleCards.forceUpdate();
            } else {


                Data.visual.appVisual.search.peopleCards.setUsers([]);
              //  Data.visual.appVisual.search.peopleCards.setUsers([user]);
                console.log("my user: ",Data.visual.appVisual.search.peopleCards.userFound);
                Data.visual.appVisual.search.peopleCards.forceUpdate();
            }
        }

        //Data.visual.appVisual?.search.showPeopleCards();

    }
}

export default SearchController;
