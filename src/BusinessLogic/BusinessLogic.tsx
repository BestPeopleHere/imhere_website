import { jwtDecode } from 'jwt-decode';
import TagDTO from "../Controller/DTO/TagDTO.tsx";
import UserProfileDTO from "../Controller/DTO/UserProfileDTO.tsx";
import UserFoundDTO from "../Controller/DTO/UserFoundDTO.tsx";


// interface UserProfile {
//     nickname: string;
//     status: string;
//     description: string;
//     birthday: string;
//     sex: string;
//     link_to_avatar: string;
// }

// interface TagCategory {
//     id: number;
//     category_name: string;
// }
//
// interface Tag {
//     tag_id: number;
//     tag_name: string;
//     tag_category: TagCategory;
// }

class BusinessLogic {
    constructor() {}

    async addPokimon(): Promise<void> {
        try {
            const response = await fetch('https://imhere.space:5656/api/add/pokimon', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Вставляем токен в заголовок Authorization
                    'Content-Type': 'application/json'  // Можно добавить Content-Type, если это требуется
                }
            });

            console.log("token addPokimon: ",sessionStorage.getItem('token'));

            const data = response.headers.get("Content-Length") === "0" ? null : await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    async getAllUsersPokimon(): Promise< void> {
        try {
            const response = await fetch('https://imhere.space:5656/api/users', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Вставляем токен в заголовок Authorization
                    'Content-Type': 'application/json'  // Можно добавить Content-Type, если это требуется
                }
            });



            if (!response.ok) {
                throw new Error('Could not fetch');
            }

            const data = await response.json();
            console.log('Received pokimon:', data);
            return data.message;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getPokimon(): Promise<string | null> {
        try {
            const response = await fetch('https://imhere.space:5656/api/auth/count/pokimon', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Вставляем токен в заголовок Authorization
                    'Content-Type': 'application/json'  // Можно добавить Content-Type, если это требуется
                }
            });



            if (!response.ok) {
                throw new Error('Could not fetch');
            }

            const data = await response.json();
            console.log('Received pokimon:', data);
            return data.message;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    async editUserProfile(nickname: string|undefined,status: string|undefined, description: string|undefined,birthday: string|undefined,sex: string|undefined): Promise<void> {
        const body = {
            nickname: nickname,
            status: status,
            description: description,
            birthday: birthday,
            sex: sex
        };

        console.log("body: ", body);

        try {
           // const response = await fetch(`https://imhere.space:5656/api/profile/${sessionStorage.getItem('token')}`, {
            const response = await fetch(`https://imhere.space:5656/api/profile/${sessionStorage.getItem('id')}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Вставляем токен в заголовок Authorization
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            console.log("token: ", sessionStorage.getItem('token'));

            const data = response.headers.get("Content-Length") === "0" ? null : await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async createUserProfile( ): Promise<void> {
        const body = {
            nickname: "newNickname",
            status: "Всем привет я крутой",
            description: "Я есть ляляля",
            birthday: "2000-11-30",
            sex: "FEMALE",
        };

        console.log("body: ", body);

        try {
            // const response = await fetch(`https://imhere.space:5656/api/profile/${sessionStorage.getItem('token')}`, {
            const response = await fetch(`https://imhere.space:5656/api/profile/${sessionStorage.getItem('id')}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Вставляем токен в заголовок Authorization
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            console.log("token: ", sessionStorage.getItem('token'));

            const data = response.headers.get("Content-Length") === "0" ? null : await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async editUserAvatar(file: File|undefined|null): Promise<void> {
        const formData = new FormData();

        if (file==undefined || file==null) {return;}

        formData.append('image', file); // Добавляем файл в тело запроса
        console.log(file);

        try {
            const response = await fetch(`https://imhere.space:5656/api/profile/avatar/${sessionStorage.getItem('id')}`, {
                method: 'PUT', // Метод POST, если нужно загрузить файл
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}` // Добавляем токен в заголовок Authorization
                    // 'Content-Type' не указывается, так как FormData автоматически устанавливает Content-Type
                },
                body: formData // Передаем FormData в теле запроса
            });

            console.log("token: ", sessionStorage.getItem('token'));

            if (!response.ok) {
                console.error('Failed to upload avatar:', response.statusText);
                return;
            }

            const data = await response.json();
            console.log('Upload successful:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    async getUserProfile(): Promise<UserProfileDTO | null> {



  //  async getUserProfile(): Promise<UserProfile | null> {

        try {
            //const response = await fetch(`https://imhere.space:5656/api/profile/${sessionStorage.getItem('token')}`, {
            const response = await fetch(`https://imhere.space:5656/api/profile/${sessionStorage.getItem('id')}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Accept': 'application/json'
                }
            });


            console.log("token: ", sessionStorage.getItem('token')," id: ",sessionStorage.getItem('id'));

            if (!response.ok) {
                console.error('Failed to fetch user profile:', response.statusText);
                return null;
            }

            const data: UserProfileDTO = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    async getOtherUserProfile(id:number|string|undefined): Promise<UserProfileDTO | null> {



        //  async getUserProfile(): Promise<UserProfile | null> {

        try {
            //const response = await fetch(`https://imhere.space:5656/api/profile/${sessionStorage.getItem('token')}`, {
            const response = await fetch(`https://imhere.space:5656/api/profile/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Accept': 'application/json'
                }
            });


            console.log("token: ", sessionStorage.getItem('token')," id: ",sessionStorage.getItem('id'));

            if (!response.ok) {
                console.error('Failed to fetch user profile:', response.statusText);
                return null;
            }

            const data: UserProfileDTO = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    async getTags(): Promise<TagDTO[] | null> {
        try {
            const response = await fetch('https://imhere.space:5656/api/tags', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Accept': 'application/json'
                }
            });

            console.log("token: ", sessionStorage.getItem('token'));

            if (!response.ok) {
                console.error('Failed to fetch tags:', response.statusText);
                return null;
            }

            const data: TagDTO[] = await response.json();
            console.log("Tags received:", data);
            return data;
        } catch (error) {
            console.error('Error fetching tags:', error);
            return null;
        }
    }

    async getUserProfileTags(): Promise<TagDTO[] | null> {
        try {
            const response = await fetch(`https://imhere.space:5656/api/tags/${sessionStorage.getItem('id')}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Accept': 'application/json'
                }
            });

            console.log("token: ", sessionStorage.getItem('token'));

            if (!response.ok) {
                console.error('Failed to fetch tags:', response.statusText);
                return null;
            }

            const data: TagDTO[] = await response.json();
            console.log("Tags received:", data);
            return data;
        } catch (error) {
            console.error('Error fetching tags:', error);
            return null;
        }
    }

    async updateUserTags(tagIds: number[]|undefined): Promise<boolean> {
        try {
            const response = await fetch(`https://imhere.space:5656/api/tags/${sessionStorage.getItem('id')}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tags: tagIds }) // Отправляем объект с массивом тегов
            });

            console.log("Token:", sessionStorage.getItem('token'));

            if (!response.ok) {
                console.error('Failed to update user tags:', response.statusText);
                return false;
            }

            console.log('Tags successfully updated');
            return true;
        } catch (error) {
            console.error('Error updating user tags:', error);
            return false;
        }
    }




    async registerUser(email: string | undefined, password: string| undefined): Promise<string | null>
    {
        const user = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch('https://imhere.space:5656/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Указываем, что данные в формате JSON
                },
                body: JSON.stringify(user), // Преобразуем объект пользователя в JSON
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json(); // Получаем данные как AuthenticationResponse
            this.token = data.access_token;

            console.log("data reg: ", data);

            sessionStorage.setItem('token', this.token);

            const userId:string |null=data.id;

            if (userId!=null) {
                sessionStorage.setItem('id', userId);
            }

            console.log("data: ",data.access_token," id: ",sessionStorage.getItem('id'));

            return "data"; // Возвращаем данные

        } catch (error) {
            console.error('Error during registration:', error);
            return null; // Возвращаем объект с сообщением об ошибке
        }
    }

    async authUser(email: string | undefined, password: string| undefined): Promise<string|null> {
        const user = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch('https://imhere.space:5656/api/auth/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Указываем, что данные в формате JSON
                },
                body: JSON.stringify(user), // Преобразуем объект пользователя в JSON
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data   = await response.json(); // Получаем данные как AuthenticationResponse

            this.token = data.access_token;
            sessionStorage.setItem('token', this.token);

            const userId:string |null=data.id;

            if (userId!=null) {
                sessionStorage.setItem('id', userId);
            }

            console.log("data reg: ", data);


            // const decodedToken = jwt_decode(this.token);
            //
            // console.log('Decoded Token:', decodedToken);
            // console.log('User ID:', decodedToken.userId);
            // console.log('Token Expiration Time:', new Date(decodedToken.exp * 1000).toLocaleString());

            console.log("data: ",sessionStorage.getItem('token')," id: ",sessionStorage.getItem('id'));

            return "data"; // Возвращаем данные

        } catch (error) {
            console.error('Error during registration:', error);
            return null; // Возвращаем объект с сообщением об ошибке
        }
    }


    async searchUsers(description: string | null, tags: TagDTO[] | null): Promise<UserFoundDTO[]> {
        try {
            // Преобразуем TagDTO[] в массив id
            const tagIds = tags ? tags.map(tag => tag.id) : [];

            const response = await fetch('https://imhere.space:5656/api/search', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify(requestBody)
                body: JSON.stringify({
                    description: description || "", // Если description null, отправляем пустую строку
                    tags: tagIds  // Массив id из TagDTO
                })
            });

            console.log("Token:", sessionStorage.getItem('token'));

            if (!response.ok) {
                console.error('Failed to search users:', response.statusText);
                return [];
            }

            const data = await response.json();
            console.log("Users found:", data);

            // Преобразуем данные в массив UserFoundDTO
            const users: UserFoundDTO[] = data.map((user: any) => ({
                id: user.id,
                nickname: user.nickname,
                description: user.description,
                link_to_avatar: user.link_to_avatar,
                tags: user.tags
                    ? user.tags.map((tag: any) => ({
                        id: tag.tag_id,
                        tag_name: tag.tag_name,
                        tagCategory: tag.tag_category
                            ? {
                                id: tag.tag_category.id,
                                category_name: tag.tag_category.category_name
                            }
                            : null // Если tag_category отсутствует
                    }))
                    : [] // Если tags отсутствуют
            }));

            return users;
        } catch (error) {
            console.error('Error searching users:', error);
            return [];
        }
    }



    getUserIdFromToken(token: string): string | null {
        try {
            const decoded = jwtDecode<{ user_id: number }>(token);
            return decoded.user_id ? decoded.user_id.toString() : null;
        } catch (error) {
            console.error("Failed to decode token:", error);
            return null;
        }
    }

    token: string="";
   // userId: number|null = null;

}


export default BusinessLogic;