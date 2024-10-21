import VisualObject from "../ItcHyFeeL/VisualObject.tsx";

class Example extends VisualObject {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Желаю всем искателям конфетки преобрести ириски деток</p>
                </header>
            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }
}

export default Example;


// <nav>
//     <Link to="/">Home</Link>
// </nav>
// <div>
//     <h2>Pokimon from this component: {this.pokimon}</h2>
//
//     <Element instance={this.button}/>
//
//     <button id="external-button">
//         Increase Pokimon
//     </button>
// </div>