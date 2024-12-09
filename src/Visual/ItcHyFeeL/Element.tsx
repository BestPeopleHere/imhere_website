import { useNavigate } from 'react-router-dom';
import InstanceRender from './InstanceRender.tsx';
import VisualObject from "./VisualObject";
//import VisualObject from "./VisualObject";

interface ElementProps {
    instance: VisualObject;
    className?: string;
}

function Element(props: ElementProps)
{
    const navigate = useNavigate();
   // const params = useParams();

    const { instance } = props;
    if (instance instanceof VisualObject) {

        return (
            <InstanceRender
                {...props}
                navigate={navigate}
               // params={params}
            />
        );
    } else {
        console.log("Man? It is not VisualObject! ", instance);
        return null;
    }


}

export default Element;
