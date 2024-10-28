import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppVisual from './AppVisual';
import ElementWithoutRouter from "./ItcHyFeeL/ElementWithoutRouter.tsx";
import appVisual from "./AppVisual";


class Visual {
    private appVisual: AppVisual | undefined;

    draw(): void
    {
        this.appVisual = new AppVisual();

        createRoot(document.getElementById('root') as HTMLElement).render(
            <StrictMode>
                <ElementWithoutRouter instance={this.appVisual} />
            </StrictMode>
        );
    }

    drawPokimon(value: any): void {
        if (this.appVisual instanceof AppVisual) {
            console.log('drawPokimon');
            this.appVisual.setPokimon(value);
        }
    }
    drawError(errorMassage:string): void{
        this.appVisual?.authReg.error.show(errorMassage);
    }



}

export default Visual;
