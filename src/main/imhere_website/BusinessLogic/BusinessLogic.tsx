class BusinessLogic {
    constructor() {}

    async addPokimon(): Promise<void> {
        try {
            const response = await fetch('http://localhost:8080/api/add/pokimon', {
                method: 'POST'
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getPokimon(): Promise<string | null> {
        try {
            const response = await fetch('http://localhost:8080/api/count/pokimon');
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
}

export default BusinessLogic;