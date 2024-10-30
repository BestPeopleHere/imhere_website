import Controller from "./Controller.tsx";

class RegController extends Controller {
    private email: string;
    private password: string;

    constructor(email: string, password: string) {
        super();
        this.email = email;
        this.password = password;
    }

    isEmailValid(): boolean {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(this.email);
        console.log("Email valid:", isValid); // Для отладки
        return isValid;
    }

    isPasswordValid(): boolean {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isValid = passwordPattern.test(this.password);
        console.log("Password valid:", isValid); // Для отладки
        return isValid;
    }

    async performe(): Promise<void> {
        console.log("Registering with", this.email, this.password);

        try {
            const response = await fetch("https://echo.free.beeceptor.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                }),
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log('Account created successfully:', data);
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            throw error;
        }
    }
}

export default RegController;
