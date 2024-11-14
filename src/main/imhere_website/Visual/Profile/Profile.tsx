import './Profile.css';
import VisualObject from "../ItcHyFeeL/VisualObject.tsx";

class Profile extends VisualObject {
    constructor() {
        super();
    }

    render() {
        return (<div className='main-container'>
                <span className='all-projects'>Все проекты</span>
                <div className='flex-row'>
                    <div className='rectangle'/>
                    <div className='rectangle-1'>
                        <div className='rectangle-2'>
                            <span className='edit-profile'>Редактировать</span>
                            <span className='logout'>Выйти</span>
                            <span className='search'>Поиск</span>
                        </div>
                        <span className='about-me'>Обо мне</span>
                        <div className='rectangle-3'/>
                        <div className='flex-row-4'>
                            <span className='tags'>Теги</span>
                            <span className='tags-5'>Теги</span>
                        </div>
                        <div className='flex-row-b'>
                            <button className='rectangle-button'>
                                <span className='span-koshka'>Кошка</span>
                            </button>
                            <button className='rectangle-button-6'>
                                <span className='span-sobaka'>Собака</span>
                            </button>
                            <button className='rectangle-button-7'>
                                <span className='span-dizain'>Дизайн</span>
                            </button>
                            <button className='rectangle-button-8'>
                                <span className='span-rybalka'>Рыбалка</span>
                            </button>
                            <div className='rectangle-div'>
                                <div className='plus-div'/>
                            </div>
                            <button className='rectangle-button-9'>
                                <span className='span-kulinarya'>Кулинария</span>
                            </button>
                            <button className='rectangle-button-a'>
                                <span className='span-programmirovaniye'>Программирвоание</span>
                            </button>
                        </div>
                        <div className='flex-row-d'>
                            <div className='section-5'>
                                <div className='pic-2'/>
                            </div>
                            <span className='text-e'>Портфолио</span>
                        </div>
                        <div className='group'>
                            <div className='wrapper-2'>
                                <span className='text-f'>ImHere</span>
                                <span className='text-10'>Такой вот проект</span>
                            </div>
                            <div className='section-6'>
                                <span className='text-11'>ImHere</span>
                                <span className='text-12'>Такой вот проект</span>
                            </div>
                            <div className='box-5'>
                                <span className='text-13'>ImHere</span>
                                <span className='text-14'>Такой вот проект</span>
                            </div>
                        </div>
                        <div className='section-7'>
                            <div className='rectangle-b'>
                                <span className='im-here'>ImHere</span>
                                <span className='takoy-vot-proekt'>Такой вот проект</span>
                            </div>
                            <div className='rectangle-c'>
                                <span className='im-here-d'>ImHere</span>
                                <span className='takoy-vot-proekt-e'>Такой вот проект</span>
                            </div>
                            <div className='rectangle-f'>
                                <span className='im-here-10'>ImHere</span>
                                <span className='takoy-vot-proekt-11'>Такой вот проект</span>
                            </div>
                        </div>
                    </div>
                    <span className='im-here-12'>ImHere</span>
                    <div className='rectangle-13'/>
                    <div className='rectangle-14'>
                        <div className='download'/>
                    </div>
                    <div className='ellipse'/>
                    <span className='anechka-s'>Anechka.s</span>
                    <div className='rectangle-15'/>
                    <span className='status'>Статус</span>
                    <span className='anna-sibiryakova'>Anna Sibiryakova</span>
                    <div className='ellipse-16'/>
                    <span className='aug-27'>27 авг</span>
                    <div className='rectangle-17'>
                        <span className='im-here-18'>ImHere</span>
                        <span className='project-description'>Такой вот проект</span>
                    </div>
                    <div className='rectangle-19'>
                        <span className='im-here-1a'>ImHere</span>
                        <span className='project-description-1b'>Такой вот проект</span>
                    </div>
                    <div className='rectangle-1c'>
                        <span className='im-here-1d'>ImHere</span>
                        <span className='project-description-1e'>Такой вот проект</span>
                    </div>
                </div>
            </div>
        );
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }
}

export default Profile;