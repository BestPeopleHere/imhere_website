import { Component, ReactNode } from "react";
import VisualObject from "./VisualObject";
import { NavigateFunction, Params } from "react-router-dom";
import DoneElement from "./DoneElements/DoneElement.tsx";

interface InstanceRenderProps {
    instance: VisualObject;
    className?: string;
     navigate?: NavigateFunction;
     params?: Params;
}

class InstanceRender extends Component<InstanceRenderProps> {
    private instance: VisualObject;
  //  private navigate: NavigateFunction | null = null;
   // private params: Params | null = null;

    constructor(props: InstanceRenderProps) {
        super(props);

        const { instance, className,
          //  navigate, params
        } = this.props;

        this.instance = instance;
        this.className = className;

       // if (navigate && params) {
          //  this.navigate = navigate;
          //  this.params = params;
      //  }

        this.instance.setInstanceRenderer(this);
    }

    render(): ReactNode {
        if (this.instance && typeof this.instance.render === 'function') {
            if (this.instance instanceof DoneElement)
            {
                const doneElementInstance = this.instance as DoneElement;
                doneElementInstance.setClassName(this.className);
                return doneElementInstance.render();
            }
            else
            {
                if (!this.className) {
                    return this.instance.render();
                } else {
                    return (
                        <div className={this.className}>
                            {this.instance.render()}
                        </div>
                    );
                }
            }
        }
        return null;
    }

    componentDidMount() {
        this.instance.readyToBeRendered();
    }


    private className: string | undefined = undefined;
}

export default InstanceRender;
