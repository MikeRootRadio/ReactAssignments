const SidekickStepForm = () => {
    return (
        <div className="form_section">
            <fieldset>
                <legend>Your Sidekick</legend>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="sidekick_name">Name</label>
                            </td>
                            <td>
                                <input type="text" name="sidekick_name" id="sidekick_name" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="skill">Skill (Optional)</label>
                            </td>
                            <td>
                                <input type="text" name="skill" id="skill" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>Finish</button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
}

export default SidekickStepForm;