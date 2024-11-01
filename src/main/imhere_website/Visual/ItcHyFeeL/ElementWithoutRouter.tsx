//import InstanceRender from './InstanceRender';
import VisualObject from "./VisualObject";
import InstanceRender from "./InstanceRender.tsx";
//import InstanceRender from "./InstanceRender.tsx";

// interface ElementProps {
//     instance: VisualObject;
//     className?: string;
// }

interface ElementWithoutHooksProps {
    instance: VisualObject;
}

function ElementWithoutRouter(props: ElementWithoutHooksProps) {
    const { instance } = props;

    if (instance instanceof VisualObject) {
        return <InstanceRender {...props} className={undefined} navigate={undefined} />;
    } else {
        console.log("Man? It is not VisualObject! ", instance);
        return null;
    }
}

export default ElementWithoutRouter;
