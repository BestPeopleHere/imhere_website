//import InstanceRenderer from './InstanceRenderer.tsx';

//import InstanceRender from "./InstanceRender.tsx";

import InstanceRender from "./InstanceRender.tsx";

class VisualObject {


    render() {
        return (
            <div>
                <h1>Великие садоводы</h1>
                <p>Будьте аккуратны, на вас напала саранча!</p>
            </div>
        );
    }

    readyToBeRendered() {
        // Реализуйте логику, если необходимо
    }

    setInstanceRenderer(instanceRenderer: InstanceRender) {
        this.instanceRenderer = instanceRenderer;
    }

    forceUpdate() {
        if (this.instanceRenderer) {
            this.instanceRenderer.forceUpdate();
        }
    }

    navigate(path: string)
    {
        if (this.instanceRenderer?.navigate!=undefined) {
            this.instanceRenderer?.navigate(path);
            this.instanceRenderer?.navigate(0);
        }

    }

    update()
    {
        if (this.instanceRenderer?.navigate!=undefined) {
            this.instanceRenderer?.navigate(0);
        }
    }

    private instanceRenderer: InstanceRender | null = null;

}

export default VisualObject;
