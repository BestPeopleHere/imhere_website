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
                Привет, очаровашачка
                <ElementWithoutRouter instance={this.appVisual} />
            </StrictMode>
        );
    }

    drawPokimon(value: string): void {
        if (this.appVisual instanceof AppVisual) {
            console.log('drawPokimon');
            this.appVisual.homePage.setPokemonCount(value);
        }
    }

    toMain()
    {
        this.appVisual?.authReg.navigate('/profile');
        this.appVisual?.authReg.update();
    }

    toSauna()
    {
        this.appVisual?.authReg.navigate('/sauna');
       // this.appVisual?.authReg.update();
    }

    toEditProfile()
    {
        this.appVisual?.profile.navigate('/profile/edit');
        this.appVisual?.profile.update();
    }


    toReg()
    {
        this.appVisual?.reg.navigate('/');
    }

    public appVisual: AppVisual | undefined;
}

export default Visual;
