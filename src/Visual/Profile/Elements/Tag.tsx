import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import styles from "./Tag.module.css";

class Tag extends VisualObject {
    constructor(label: string) {
        super();
        this.label = label;
        this.color = this.getRandomColor();
    }

    getRandomColor(): string {
        const colors = ["#C48DD8", "#FFB74D", "#81C784", "#64B5F6", "#FF7043"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
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
