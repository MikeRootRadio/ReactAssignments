import { useState } from "react";
import User from "../interfaces/user";
import ConfirmationStep from "./ConfirmationStep";
import SidekickStepForm from "./SidekickStepForm";
import UserStepForm from "./UserStepForm";
import WizardStepForm from "./WizardStepForm";
import { useForm } from 'react-hook-form';

const SignUpFlow = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<User>();
    const [user, setUser] = useState("");

    return (
        <>
            <h1>Wizard Signup Wizard</h1>
            <UserStepForm onComplete={setUser()} />
            <WizardStepForm />
            <SidekickStepForm />
            <ConfirmationStep />
        </>
    );
}

export default SignUpFlow;