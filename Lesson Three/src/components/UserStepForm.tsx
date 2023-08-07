import { FormEvent, useState } from "react";
import { User } from "../interfaces/User";

type Props = {
    onComplete(e:FormEvent, user: User): void
};

const UserStepForm = (props : Props) => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[terms, setTerms] = useState(false);
    const[newsletter, setNewsletter] = useState(true);

    return (
        <div className="form_section">
            <form onSubmit={(e: FormEvent) => props.onComplete(e, {
                email: email,
                password: "",
                confirmPassword: "",
                newsletter: false,
                terms: false
            })}>
                <fieldset>
                    <legend>User Information</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="email">Email</label>
                                </td>
                                <td>
                                    <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="password">Password</label>
                                </td>
                                <td>
                                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="confirm_password">Confirm Password</label>
                                </td>
                                <td>
                                    <input type="password" name="confirm_password" id="confirm_password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Terms
                                </td>
                                <td>
                                    <input type="checkbox" checked={terms} onChange={e => setTerms(e.target.value == "true")} /> I accept the terms and conditions
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Newsletter
                                </td>
                                <td>
                                    <input type="checkbox" checked={newsletter} onChange={e => setNewsletter(e.target.value == "true")} /> I would like to receive email updates!
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Get Started" />
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </form>
        </div>
    );
}

export default UserStepForm;