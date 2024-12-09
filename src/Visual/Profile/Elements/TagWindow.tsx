import styles from './TagWindow.module.css';
import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import Element from "../../ItcHyFeeL/Element";
import Button from "../../ItcHyFeeL/DoneElements/Button";
import TagDTO from "../../../Controller/DTO/TagDTO.tsx";
import TagCategory from "../../../Controller/DTO/TagCategory.tsx";
import SaveTagsController from "../../../Controller/SaveTagsController.tsx";

class TagWindow extends VisualObject {
    constructor() {
        super();
        this.saveButton = new Button();

        this.handleTagSelection = this.handleTagSelection.bind(this);
        this.toggleCategory = this.toggleCategory.bind(this);
        this.readyToBeRendered = this.readyToBeRendered.bind(this);
    }

    toggleCategory(category: TagCategory) {

        this.showCategories[category.id] = !this.showCategories[category.id];

        this.forceUpdate();
    }

    handleTagSelection(tag: TagDTO) {

        this.selectedTags?.push(tag);

        this.forceUpdate();
    }

    handleTagSelectionOut(tag: TagDTO) {
        if (this.selectedTags)
        {
            this.selectedTags = this.selectedTags.filter(selected => selected.id !== tag.id);
            this.forceUpdate();
        }
    }

    readyToBeRendered() {
        this.saveButton.setText('Сохранить');
         this.saveButton.setActionController(new SaveTagsController());
        //     console.log("Теги сохранены!", this.state.selectedTags);
        //     this.hideTagWndow();
        // });
    }

    render() {
        return (
            <div className={styles['main-container']}>
                {/*<button className={styles.exit} onClick={this.hideTagWindow}>×</button>*/}
                <span className={styles.name}>Добавить новый тег</span>

                <div className={styles['form-container']}>
                    <div className={styles['category-container']}>
                        {this.categories?.map((category: TagCategory) => (
                            <div key={category.id} className={styles['category-section']}>
                                <div className={styles['category-header']}>
                                    <span className={styles['category-title']}>{category.category_name}</span>
                                    <button
                                        className={`${styles['toggle-button']} `}
                                        onClick={() => this.toggleCategory(category)}
                                    />
                                </div>

                                {/* Всегда отображаем выбранные теги */}
                                <div className={styles['selected-tags-container']}>
                                    {this.selectedTags?.filter(tag =>
                                        tag.tagCategory.id === category.id).map((tag: TagDTO) => (
                                        <button
                                            key={`selected-${tag.tag_name}`}
                                            className={`${styles['tag-option']} ${styles.active}`}
                                            onClick={() => this.handleTagSelectionOut(tag)}
                                        >
                                            {tag.tag_name}
                                        </button>
                                    ))}
                                </div>

                                {/* Отображаем доступные теги только если категория раскрыта */}
                                {(
                                    <div className={styles['tag-options-container']}>
                                        {this.tags?.filter(tag =>
                                            this.showCategories[category.id] &&
                                            tag.tagCategory.id === category.id &&
                                            !this.selectedTags?.some((selected: TagDTO) => selected.id === tag.id ) // Исключаем выбранные теги
                                        ).map((tag: TagDTO) => (
                                            <button
                                                key={`available-${tag}`}
                                                className={`${styles['tag-option']}`}
                                                onClick={() => this.handleTagSelection(tag)}
                                            >
                                                {tag.tag_name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <Element
                    instance={this.saveButton}
                    className={styles['save-button']}
                />
            </div>
        );
    }

    setAllTags(tags: TagDTO[]|null,userTags: TagDTO[]|null|undefined) {

        this.tags=tags;
        this.selectedTags = userTags ? [...userTags] : null;
        this.categories=this.getUniqueCategories(tags);

        //console.log(categories);

    }

    getUniqueCategories(tags: TagDTO[] | null): TagCategory[] | null {
        if (tags == null) {
            return null;
        }

        const uniqueCategories = new Map<number, TagCategory>();

        tags.forEach(tag => {
            uniqueCategories.set(tag.tagCategory.id, tag.tagCategory); // Сохраняем TagCategory с уникальным id
            this.showCategories[tag.tagCategory.id] = false;
        });

        return Array.from(uniqueCategories.values()); // Возвращаем массив уникальных категорий
    }

    getSelectedTagIds(): number[] {
        if (!this.selectedTags) {
            return []; // Если selectedTags равен null или undefined, возвращаем пустой массив
        }

        return this.selectedTags.map(tag => tag.id); // Преобразуем массив объектов в массив id
    }





    saveButton: Button;
    tags:TagDTO[]|null=null;
    selectedTags: TagDTO[]|null|undefined;
    categories:TagCategory[]|null=null;
    showCategories: { [key: number]: boolean } = {};
}

export default TagWindow;
