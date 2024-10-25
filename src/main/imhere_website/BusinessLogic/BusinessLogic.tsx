//import jwt_decode from 'jwt-decode';


class BusinessLogic {
    constructor() {}




    async addPokimon(): Promise<void> {
        try {
            const response = await fetch('http://localhost:8080/api/add/pokimon', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.token}`, // Вставляем токен в заголовок Authorization
                    'Content-Type': 'application/json'  // Можно добавить Content-Type, если это требуется
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getPokimon(): Promise<string | null> {
        try {
            const response = await fetch('http://localhost:8080/api/count/pokimon', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`, // Вставляем токен в заголовок Authorization
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

    async registerUser(email: string, password: string): Promise<string>
    {
        const user = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
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

            console.log("data: ",data.access_token);

            return "data"; // Возвращаем данные

        } catch (error) {
            console.error('Error during registration:', error);
            return "netu" ; // Возвращаем объект с сообщением об ошибке
        }
    }

    async authUser(email: string, password: string): Promise<string> {
        const user = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:8080/api/auth/authenticate', {
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

            // const decodedToken = jwt_decode(this.token);
            //
            // console.log('Decoded Token:', decodedToken);
            // console.log('User ID:', decodedToken.userId);
            // console.log('Token Expiration Time:', new Date(decodedToken.exp * 1000).toLocaleString());

            console.log("data: ",this.token);

            return "data"; // Возвращаем данные

        } catch (error) {
            console.error('Error during registration:', error);
            return "netu" ; // Возвращаем объект с сообщением об ошибке
        }
    }

    token: string="";


}


export default BusinessLogic;