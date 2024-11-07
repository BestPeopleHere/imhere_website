import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import AppVisual from './AppVisual';
//import ElementWithoutRouter from "./ItcHyFeeL/ElementWithoutRouter.tsx";

class Visual {


    draw(): void
    {
        //this.appVisual = new AppVisual();

        createRoot(document.getElementById('root') as HTMLElement).render(
            <StrictMode>
                Привет, редиска
            </StrictMode>
        );
    }

}

export default Visual;
