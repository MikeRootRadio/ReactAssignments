import { useState } from "react";
import User from "../interfaces/user";

type Props = {
    onComplete(user: User): void
}

const UserStepForm = (Props: Props) => {

    let User = {
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: true,
        terms: false
    };

    return (
        <div className="form_section">
            <fieldset>
                <legend>User Information</legend>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="email">Email</label>
                            </td>
                            <td>
                                <input type="email" name="email" id="email" value={User.email} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="password">Password</label>
                            </td>
                            <td>
                                <input type="password" name="password" id="password" value={User.password} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="confirm_password">Confirm Password</label>
                            </td>
                            <td>
                                <input type="password" name="confirm_password" id="confirm_password" value={User.confirmPassword} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Terms
                            </td>
                            <td>
                                <input type="checkbox" checked={User.terms} /> I accept the terms and conditions
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Newsletter
                            </td>
                            <td>
                                <input type="checkbox" checked={User.newsletter} /> I would like to receive email updates!
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" onSubmit={() => Props.onComplete(User)}>Get Started</input>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
}

export default UserStepForm;