const ConfirmationStep = () => {
    return (
        <div className="form_section">
            <fieldset>
                <legend>Confirm your Registration</legend>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h2>User Details</h2>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email:
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>Confirm and Sign up!</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
}

export default ConfirmationStep;