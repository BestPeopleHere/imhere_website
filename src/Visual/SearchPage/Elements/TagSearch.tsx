import $ from "jquery";
import '../SearchPage.css';

class TagSearch {
    private id: string;

    constructor(id: string) {
        this.id = id; // ID привязывается к кнопке tag-search-button
    }

    render() {
        return (
            <div id={`${this.id}-popup`} className="tag-popup hidden">
                <button id={`${this.id}-close`} className="close-button"></button>
            </div>
        );
    }

    attachEvents() {
        const popup = $(`#${this.id}-popup`);
        const closeButton = $(`#${this.id}-close`);

        // Закрыть окно при нажатии на кнопку "Close"
        closeButton.on('click', () => {
            popup.addClass('hidden');
        });
    }

    toggle() {
        const popup = $(`#${this.id}-popup`);
        popup.toggleClass('hidden'); // Показываем/скрываем окно
    }
}

export default TagSearch;
