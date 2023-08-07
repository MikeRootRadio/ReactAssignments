import Sidekick from "./sidekick";
import Wizard from "./wizard";

interface User {
    email: string;
    password: string;
    newsletter: boolean;
    wizard?: Wizard;
    sidekick?: Sidekick;
    terms: boolean;
    confirmPassword: string;
}

export default User;