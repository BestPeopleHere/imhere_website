import styles from './TagWindow.module.css';
import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import Element from "../../ItcHyFeeL/Element";
import Button from "../../ItcHyFeeL/DoneElements/Button";

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
                "Отношение к курению": ["Не курю", "Курю", "Отказался"],
                "Отношение к алкоголю": ["Не пью", "Пью умеренно", "Пью часто"],
            },
            selectedTags: {
                "Жанры фильмов": [],
                "Жанры игр": [],
                "Хобби": [],
                "Отношение к курению": [],
                "Отношение к алкоголю": [],
            },
            expandedCategories: {
                "Жанры фильмов": false,
                "Жанры игр": false,
                "Хобби": false,
                "Отношение к курению": false,
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

    handleTagSelection(category: string, tag: string) {
        const { selectedTags, tags } = this.state;

        const isSelected = selectedTags[category]?.includes(tag);

        const updatedSelectedTags = isSelected
            ? selectedTags[category].filter((t: string) => t !== tag)
            : [...(selectedTags[category] || []), tag];

        const updatedTags = isSelected
            ? [...(tags[category] || []), tag]
            : (tags[category] || []).filter((t: string) => t !== tag);

        this.state.selectedTags = {
            ...selectedTags,
            [category]: updatedSelectedTags,
        };

        this.state.tags = {
            ...tags,
            [category]: updatedTags,
        };

        this.forceUpdate();
    }

    readyToBeRendered() {
        this.saveButton.setText('Сохранить');
        this.saveButton.setActionController(() => {
            console.log("Теги сохранены!", this.state.selectedTags);
            this.hideTagWindow();
        });
    }

    render() {
        const { selectedTags, tags, expandedCategories } = this.state;

        return (
            <div className={styles['main-container']}>
                <button className={styles.exit} onClick={this.hideTagWindow}>×</button>
                <span className={styles.name}>Добавить новый тег</span>

                <div className={styles['form-container']}>
                    <div className={styles['category-container']}>
                        {Object.keys(tags).map(category => (
                            <div key={category} className={styles['category-section']}>
                                <div className={styles['category-header']}>
                                    <span className={styles['category-title']}>{category}</span>
                                    <button
                                        className={`${styles['toggle-button']} ${
                                            expandedCategories[category] ? styles.expanded : ''
                                        }`}
                                        onClick={() => this.toggleCategory(category)}
                                    />
                                </div>

                                {/* Всегда отображаем выбранные теги */}
                                <div className={styles['selected-tags-container']}>
                                    {selectedTags[category]?.map(tag => (
                                        <button
                                            key={`selected-${tag}`}
                                            className={`${styles['tag-option']} ${styles.active}`}
                                            onClick={() => this.handleTagSelection(category, tag)}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>

                                {/* Отображаем доступные теги только если категория раскрыта */}
                                {expandedCategories[category] && (
                                    <div className={styles['tag-options-container']}>
                                        {tags[category]?.filter(tag => !selectedTags[category]?.includes(tag)).map(tag => (
                                            <button
                                                key={`available-${tag}`}
                                                className={`${styles['tag-option']} ${selectedTags[category]?.includes(tag) ? styles.active : ''}`}
                                                onClick={() => this.handleTagSelection(category, tag)}
                                            >
                                                {tag}
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

    saveButton: Button;
}

export default TagWindow;
