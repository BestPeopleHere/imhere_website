import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppVisual from './AppVisual';
import {TroveControllers} from "../Controller/TroveControllers.tsx";
import ElementWithoutHooks from "./ItcHyFeeL/ElementWithoutHooks.tsx";
//import ElementWithoutHooks from "./ElementWithoutHooks.tsx";


class Visual {
    private appVisual: AppVisual | undefined;
    private troveController: TroveControllers | undefined;

    draw(): void {
        if (!this.troveController) {
            throw new Error('TroveController is not set');
        }
        this.appVisual = new AppVisual(this.troveController);

        createRoot(document.getElementById('root') as HTMLElement).render(
            <StrictMode>
                <ElementWithoutHooks instance={this.appVisual} />
                {/* <AppVisual visualSetUp={{ setVisualObject: this.setVisualObject.bind(this) }} troveController={this.troveController} /> */}
            </StrictMode>
        );
    }

    drawPokimon(value: any): void {
        if (this.appVisual instanceof AppVisual) {
            console.log('drawPokimon');
            this.appVisual.setPokimon(value);
        }
    }

    setTroveController(troveController: TroveControllers): void {
        this.troveController = troveController;
    }
}

export default Visual;
