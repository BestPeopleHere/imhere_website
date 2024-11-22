import styles from './TagWindow.module.css';
import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import Element from "../../ItcHyFeeL/Element";
import Button from "../../ItcHyFeeL/DoneElements/Button";

class TagWindow extends VisualObject {
    constructor() {
        super();
        this.saveButton = new Button();

        // Привязываем метод к текущему контексту
        this.handleTagSelection = this.handleTagSelection.bind(this);

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
            }
        };
    }

    // Обработчик выбора тега
    handleTagSelection(category: string, tag: string) {
        console.log("Обработка выбора тега");

        // Получение текущего состояния
        const { selectedTags, tags } = this.state;

        // Проверка, выбран ли тег
        const isSelected = selectedTags[category]?.includes(tag);

        // Обновление выбранных тегов
        const updatedSelectedTags = isSelected
            ? selectedTags[category].filter((t: string) => t !== tag)
            : [...(selectedTags[category] || []), tag];

        // Обновление доступных тегов
        const updatedTags = isSelected
            ? [...(tags[category] || []), tag]
            : (tags[category] || []).filter((t: string) => t !== tag);

        // Обновление состояния вручную
        this.state = {
            ...this.state,
            selectedTags: {
                ...selectedTags,
                [category]: updatedSelectedTags,
            },
            tags: {
                ...tags,
                [category]: updatedTags,
            },
        };

        // Обновление интерфейса
        this.forceUpdate();
    }

    render() {
        const { selectedTags, tags } = this.state;

        return (
            <div className={styles['main-container']}>
                <button className={styles.exit} onClick={this.hideTagWindow}>×</button>
                <span className={styles.name}>Добавить новый тег</span>

                <div className={styles['form-container']}>
                    <div className={styles['category-container']}>
                        {Object.keys(tags).map(category => (
                            <div key={category} className={styles['category-section']}>
                                <span className={styles['category-title']}>{category}</span>

                                {/* Рендеринг выбранных тегов */}
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

                                {/* Рендеринг доступных тегов */}
                                <div className={styles['tag-options-container']}>
                                    {tags[category]?.map(tag => (
                                        <button
                                            key={`available-${tag}`}
                                            className={`${styles['tag-option']} ${selectedTags[category]?.includes(tag) ? styles.active : ''}`}
                                            onClick={() => this.handleTagSelection(category, tag)}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
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



    readyToBeRendered() {
        this.saveButton.setText('Сохранить');
        this.saveButton.setActionController(() => {
            console.log("Теги сохранены!", this.state.selectedTags);
            this.hideTagWindow();

            // Обновление интерфейса после сохранения
            this.forceUpdate();
        });
    }

    saveButton: Button;
}

export default TagWindow;
