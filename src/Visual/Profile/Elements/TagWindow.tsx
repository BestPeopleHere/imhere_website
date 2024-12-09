import styles from './TagWindow.module.css';
import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import Element from "../../ItcHyFeeL/Element";
import Button from "../../ItcHyFeeL/DoneElements/Button";
import TagDTO from "../../../Controller/DTO/TagDTO.tsx";

class TagWindow extends VisualObject {
    constructor() {
        super();
        this.saveButton = new Button();

        this.handleTagSelection = this.handleTagSelection.bind(this);
        this.toggleCategory = this.toggleCategory.bind(this);
        this.readyToBeRendered = this.readyToBeRendered.bind(this);

        this.state = {
            tags: {
                "Жанры фильмов": ["Драма", "Комедия", "Триллер", "Фантастика", "Ужасы"],
                "Жанры игр": ["RPG", "Экшен", "Головоломка", "Шутер", "Стратегия"],
                "Хобби": ["Фотография", "Рисование", "Чтение", "Спорт", "Музыка"],
                "Отношение к курению да ладно": ["Не курю", "Курю", "Отказался"],
                "Отношение к алкоголю": ["Не пью", "Пью умеренно", "Пью часто"],
            },
            selectedTags: {
                "Жанры фильмов": [],
                "Жанры игр": [],
                "Хобби": [],
                "Отношение к курению а": [],
                "Отношение к алкоголю": [],
            },
            expandedCategories: {
                "Жанры фильмов": false,
                "Жанры игр": false,
                "Хобби": false,
                "Отношение к курению че": false,
                "Отношение к алкоголю": false,
            }
        };
    }

    toggleCategory(category: string) {
        const { expandedCategories } = this.state;
        this.state.expandedCategories = {
            ...expandedCategories,
            [category]: !expandedCategories[category],
        };
        this.forceUpdate();
    }

    handleTagSelection(tag: TagDTO) {

        this.selectedTags?.push(tag);

        this.forceUpdate();
    }

    handleTagSelectionOut(tag: TagDTO) {
        if (this.selectedTags)
        {
            this.selectedTags = this.selectedTags.filter(selected => selected.tag_id !== tag.tag_id);
            this.forceUpdate();
        }
    }

    readyToBeRendered() {
        this.saveButton.setText('Сохранить');
        this.saveButton.setActionController(() => {
            console.log("Теги сохранены!", this.state.selectedTags);
            this.hideTagW\ndow();
        });
    }

    render() {
        return (
            <div className={styles['main-container']}>
                <button className={styles.exit} onClick={this.hideTagWindow}>×</button>
                <span className={styles.name}>Добавить новый тег</span>

                <div className={styles['form-container']}>
                    <div className={styles['category-container']}>
                        {this.categories.map(category => (
                            <div key={category} className={styles['category-section']}>
                                <div className={styles['category-header']}>
                                    <span className={styles['category-title']}>{category}</span>
                                    <button
                                        className={`${styles['toggle-button']} `}
                                        onClick={() => this.toggleCategory(category)}
                                    />
                                </div>

                                {/* Всегда отображаем выбранные теги */}
                                <div className={styles['selected-tags-container']}>
                                    {this.selectedTags?.map((tag: TagDTO) => (
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
                                            !this.selectedTags?.some((selected: TagDTO) => selected.tag_id === tag.tag_id) // Исключаем выбранные теги
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

    }

    getUniqueCategories(tags: TagDTO[]|null): string[] {

        if (tags == null) {return [""]}

        const uniqueCategories = new Set<string>();

        tags.forEach(tag => {
            uniqueCategories.add(tag.tag_category.category_name);
        });

        return Array.from(uniqueCategories);
    }


    saveButton: Button;
    tags:TagDTO[]|null=null;
    selectedTags: TagDTO[]|null|undefined;
    categories:string[]=["Жанры фильмов","Жанры игр","Хобби", "Отношение к курению да ладно", "Отношение к алкоголю"];
}

export default TagWindow;
