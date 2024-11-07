import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppVisual from './AppVisual';
import ElementWithoutRouter from "./ItcHyFeeL/ElementWithoutRouter.tsx";

class Visual {


    draw(): void
    {
        this.appVisual = new AppVisual();

        createRoot(document.getElementById('root') as HTMLElement).render(
            <StrictMode>
                <ElementWithoutRouter instance={this.appVisual} />
            </StrictMode>
        );
    }

    drawPokimon(value: string): void {
        if (this.appVisual instanceof AppVisual) {
            //lklklk
            console.log('drawPokimon');

            this.appVisual.homePage.setPokemonCount(value);
        }
    }

    toMain()
    {
        this.appVisual?.authReg.navigate('/home');
        this.appVisual?.authReg.update();
    }

    toReg()
    {
        this.appVisual?.reg.navigate('/');
    }

    public appVisual: AppVisual | undefined;
}

export default Visual;
