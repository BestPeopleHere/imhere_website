import { Component, ReactNode } from "react";
import VisualObject from "./VisualObject";
import { NavigateFunction, Params } from "react-router-dom";

interface InstanceRenderProps {
    instance: VisualObject;
    className?: string;
    navigate: NavigateFunction;
    params: Params;
}

class InstanceRender extends Component<InstanceRenderProps> {
    private instance: VisualObject;
    private className?: string;
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
        return null;
    }

    componentDidMount() {
        this.instance.readyToBeRendered();
    }
}

export default InstanceRender;
