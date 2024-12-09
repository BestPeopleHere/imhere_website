import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import styles from "./Tag.module.css";

class Tag extends VisualObject {
    constructor(label: string, color: string) {
        super();
        this.label = label;
        this.color = color;
    }

    render() {
        return (
            <div className={styles.tag} style={{ backgroundColor: this.color }}>
        {this.label}
        </div>
    );
    }

    label: string;
    color: string;
}

export default Tag;
