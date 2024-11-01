//import VisualObject from "../ItcHyFeel/VisualObject";

import VisualObject from "../ItcHyFeeL/VisualObject.tsx";
import Element from "../ItcHyFeeL/Element.tsx";
import Button from "../ItcHyFeeL/DoneElements/Button.tsx";
import ButtonClickerController from "../../Controller/ButtonClickerController.tsx";

class HomePage extends VisualObject {
    constructor() {
        super();

        this.buttonAddPokemon = new Button();
        this.buttonAddPokemon.setText("Добавить покемона");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Желаю всем искателям конфетки преобрести ириски деток</p>
                    <p>Количество покемонов: {this.pokemonCount}</p>
                </header>
                <Element instance={this.buttonAddPokemon} />
            </div>
        );
    }

    readyToBeRendered() {
        this.buttonAddPokemon.setActionController(new ButtonClickerController());
    }

    setPokemonCount(count: number) {
        this.pokemonCount = count;
        this.forceUpdate();
    }



    private buttonAddPokemon: Button;
    private pokemonCount: number = 0;
}

export default HomePage;
