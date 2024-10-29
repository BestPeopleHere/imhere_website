import Data from "./Data.tsx";
import Controller from "./Controller.tsx";

class AuthController extends Controller {
    private email: string;
    private password: string;

    constructor(email: string, password: string) {
        super();
        this.email = email;
        this.password = password;
    }

    async performe(): Promise<void> {
        console.log("Logging in user:", this.email);

        const userExists = await Data.bc.authUser (this.email, this.password);
        if (!userExists) {
            throw new Error("User  not found");
        }

        // If user exists, you can redirect them to the main page here
        console.log("User  logged in successfully");
    }
}

export default AuthController;
