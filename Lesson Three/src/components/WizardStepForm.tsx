import { FormEvent, useState } from "react";
import { Wizard } from "../interfaces/Wizard";
import { Alignment } from "../enums/Alignment";

type Props = {
    onComplete(e:FormEvent, wizard: Wizard): void
};

const WizardStepForm = (props : Props) => {
    const[name, setName] = useState("");
    const[level, setLevel] = useState(0);
    const[school, setSchool] = useState("");
    const[alignment, setAlignment] = useState(Alignment.GOOD);

    return (
        <div className="form_section">
            <form onSubmit={(e: FormEvent) => props.onComplete(e, {
                name: "",
                level: 0,
                school: "",
                alignment: Alignment.GOOD
            })}>
                <fieldset>
                    <legend>Your Wizard</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="name">Name</label>
                                </td>
                                <td>
                                    <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="level">Level</label>
                                </td>
                                <td>
                                    <input type="text" name="level" id="level" value={level} onChange={e => setLevel(parseInt(e.target.value))} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="school">School</label>
                                </td>
                                <td>
                                    <select id="school" name="school" value={school} onChange={e => setSchool(e.target.value)} >

                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="alignment">Alignment</label>
                                </td>
                                <td>
                                    <input type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Next" />
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

export default WizardStepForm;