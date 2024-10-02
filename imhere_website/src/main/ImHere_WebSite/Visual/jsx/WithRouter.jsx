import { useParams } from 'react-router-dom';

function WithRouter(Component) {
    return function WrapperComponent(props) {
        const params = useParams();
        return <Component {...props} params={params} />;
    };
}

export default WithRouter;