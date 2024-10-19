//import InstanceRenderer from './InstanceRenderer.tsx';

//import InstanceRender from "./InstanceRender.tsx";

import InstanceRender from "./InstanceRender.tsx";

class VisualObject {
    private instanceRenderer: InstanceRender | null = null;

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
}

export default VisualObject;
