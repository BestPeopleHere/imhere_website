import './UserCard.css';
import Element from "../../ItcHyFeeL/Element.tsx";
import UserCardAvatar from "./CardElements/UserCardAvatar.tsx";
import UserCardStatus from "./CardElements/UserCardStatus.tsx";
import UserFoundDTO from "../../../Controller/DTO/UserFoundDTO.tsx";
import VisualObject from "../../ItcHyFeeL/VisualObject.tsx";
import ToOtherProfileController from "../../../Controller/Search/ToOtherProfileController.tsx";
import Tag from "../../Profile/Elements/Tag.tsx";
import TagDTO from "../../../Controller/DTO/TagDTO.tsx";

class UserCard extends VisualObject {

    constructor(userFound:UserFoundDTO) {
        super();
        // this.tags = Array.from({ length: 5 }, (_, index) => ({
        //     id: index,
        //     tag_name: `Тег ${index + 1}`,
        // }));

        console.log("cool!");


        this.userAvatar=new UserCardAvatar(userFound.link_to_avatar);
        this.userStatus=new UserCardStatus(userFound.description);

        this.id = userFound.id;
        this.description=userFound.description;
        this.nickname=userFound.nickname;

        this.tags = this.getRandomElements(userFound.tags, 5);

    }

    handleCardClick() {
        const con: ToOtherProfileController = new ToOtherProfileController();


        //console.log("id - "+this.id);
        con.performe(this.id);
        // Здесь можно выполнять любые действия
    }

    render() {
 // проверяем, что данные корректны
        return (
            <div className="main-container-8" onClick={() => this.handleCardClick()}>
                <div className='rectangle-8'/>
                <Element instance={this.userAvatar} className='avatar-user-card'/>
                <Element instance={this.userStatus} className='status-user-card'/>
                <span className='nickname-user-card'>{this.nickname}</span>
                <span className='status-user-card'>{this.description}</span>

                <div>
                    {this.tags?.map((tag, index) => (
                        <Element
                            key={index} // Уникальный ключ для каждого тега
                            instance={new Tag(tag.tag_name)}
                        />
                    ))}
                </div>

                {/*<div className="tags-container">*/}
                {/*    {this.tags.map((tag) => (*/}
                {/*        <Element*/}
                {/*            key={tag.id}*/}
                {/*            instance={new UserCardTag({label: tag.tag_name})}*/}
                {/*            className="tag"*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</div>*/}

            </div>
        );
    }

    getRandomElements<T>(array: T[]|null, count: number): T[]|null {
        if (array==null)
        {
            return null;
        }
        if (array.length <= count) return array; // Если элементов меньше или равно `count`, возвращаем весь массив

        const shuffled = array.slice(); // Копируем массив, чтобы не мутировать оригинал
        for (let i = shuffled.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1)); // Генерируем случайный индекс
            [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]]; // Меняем местами элементы
        }
        return shuffled.slice(0, count); // Возвращаем первые `count` элементов
    }

    readyToBeRendered() {
        //Запускается при подготовке к работе.
    }

    id: number;

    public userAvatar: UserCardAvatar;
    public userStatus: UserCardStatus;

    description: string | undefined = undefined;
    nickname: string | undefined = undefined;

    public tags: TagDTO[]|null=[];
}

export default UserCard;
