import Data from "../Data.tsx";
import Controller from "../Controller.tsx";


class ShowTagWindowOnSearch extends Controller  {
    async performe(): Promise<void> {
        console.log("ToOtherProfileController");

        const data = await Data.bc.getTags();

        console.log(data);
        //fdfsfd


        Data.visual.appVisual?.search.editTags.setAllTags(data,null);


        Data.visual.appVisual?.search.showTagWindow();
        Data.visual.appVisual?.search.editTags.setSearch();


    }
}

export default ShowTagWindowOnSearch;
