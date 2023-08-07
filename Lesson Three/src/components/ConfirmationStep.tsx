import { FormEvent } from "react";
import { Sidekick } from "../interfaces/Sidekick";
import { User } from "../interfaces/User";
import { Wizard } from "../interfaces/Wizard";
import DoubleBreak from "./DoubleBreak";

type Props = {
    onComplete(e:FormEvent): void,
    user: User,
    wizard: Wizard,
    sidekick: Sidekick
};

const ConfirmationStep = (props: Props) => {
    return (
        <div className="form_section">
            <form onSubmit={(e: FormEvent) => props.onComplete(e)}>
                <fieldset>
                    <legend>Confirm your Registration</legend>
                        <h2>User Details</h2>
                        Email: {props.user.email}
                        <DoubleBreak />
                        Receive newsletter: {props.user.newsletter}
                        <DoubleBreak />

                        <h2>Wizard</h2>
                        Name: {props.wizard.name}
                        <DoubleBreak />
                        Level: {props.wizard.level}
                        <DoubleBreak />
                        School: {props.wizard.school}
                        <DoubleBreak />
                        Alignment: {props.wizard.alignment}
                        <DoubleBreak />

                        <h2>Sidekick</h2>
                        Name: {props.sidekick.name}
                        <DoubleBreak />
                        Skill: {props.sidekick.skill}
                        <DoubleBreak />

                        <input type="submit" value="Confirm and Sign up!" />
                </fieldset>
            </form>
        </div>
    );
}

export default ConfirmationStep;