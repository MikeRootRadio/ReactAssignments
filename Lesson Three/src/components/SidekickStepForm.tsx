import { FormEvent, useState } from "react";
import { Sidekick } from "../interfaces/Sidekick";

type Props = {
    onComplete(e:FormEvent, sidekick: Sidekick): void
};

const SidekickStepForm = (props: Props) => {
    const[name, setName] = useState("");
    const[skill, setSkill] = useState("");

    return (
        <div className="form_section">
            <form onSubmit={(e: FormEvent) => props.onComplete(e, {
                name: "",
                skill: ""
            })}>
                <fieldset>
                    <legend>Your Sidekick</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="sidekick_name">Name</label>
                                </td>
                                <td>
                                    <input type="text" name="sidekick_name" id="sidekick_name" value={name} onChange={e => setName(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="skill">Skill (Optional)</label>
                                </td>
                                <td>
                                    <input type="text" name="skill" id="skill" value={skill} onChange={e => setSkill(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Finish" />
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

export default SidekickStepForm;