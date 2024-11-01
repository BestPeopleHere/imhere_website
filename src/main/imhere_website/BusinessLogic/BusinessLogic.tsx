//import jwt_decode from 'jwt-decode';


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

            console.log("token: ",sessionStorage.getItem('token'));

            const data = response.headers.get("Content-Length") === "0" ? null : await response.json();
            console.log(data);
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
            sessionStorage.setItem('token', this.token);

            console.log("data: ",data.access_token);

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

            // const decodedToken = jwt_decode(this.token);
            //
            // console.log('Decoded Token:', decodedToken);
            // console.log('User ID:', decodedToken.userId);
            // console.log('Token Expiration Time:', new Date(decodedToken.exp * 1000).toLocaleString());

            console.log("data: ",this.token);

            return "data"; // Возвращаем данные

        } catch (error) {
            console.error('Error during registration:', error);
            return null; // Возвращаем объект с сообщением об ошибке
        }
    }

    token: string="";


}


export default BusinessLogic;