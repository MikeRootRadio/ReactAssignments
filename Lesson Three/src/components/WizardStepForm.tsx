const WizardStepForm = () => {
    return (
        <div className="form_section">
            <fieldset>
                <legend>Your Wizard</legend>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="name">Name</label>
                            </td>
                            <td>
                                <input type="text" name="name" id="name" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="level">Level</label>
                            </td>
                            <td>
                                <input type="text" name="level" id="level" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="school">School</label>
                            </td>
                            <td>
                                <select id="school" name="school">

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
                                <button>Next</button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
}

export default WizardStepForm;