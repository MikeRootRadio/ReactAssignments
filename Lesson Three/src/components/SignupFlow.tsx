import { FormEvent, useState } from "react";
import { User } from "../interfaces/User";
import UserStepForm from "./UserStepForm";
import { Wizard } from "../interfaces/Wizard";
import { Alignment } from "../enums/Alignment";
import WizardStepForm from "./WizardStepForm";
import SidekickStepForm from "./SidekickStepForm";
import { Sidekick } from "../interfaces/Sidekick";
import ConfirmationStep from "./ConfirmationStep";

const SignupFlow = () => {

    // Form steps dictionary
    const userWizardStep = 1;
    const wizardWizardStep = 2;
    const sidekickWizardStep = 3;
    const confirmationWizardStep = 4;

    function onUserComplete(e:FormEvent, user : User){
        e.preventDefault();
        setUser(user);
        setWizardStep(wizardWizardStep);
    }

    function onWizardComplete(e:FormEvent, wizard : Wizard){
        e.preventDefault();
        setWizard(wizard);
        setWizardStep(sidekickWizardStep);
    }

    function onSidekickComplete(e:FormEvent, sidekick : Sidekick){
        e.preventDefault();
        setSidekick(sidekick);
        setWizardStep(confirmationWizardStep);
    }
    
    function resetData(){
        setUser({
            email: "",
            password: "",
            confirmPassword: "",
            newsletter: false,
            terms: false
        });
        setWizard({
            name: "",
            level: 0,
            school: "",
            alignment: Alignment.GOOD
        });
        setSidekick({
            name: "",
            skill: ""
        });
        setWizardStep(1);
    }

    const[wizardStep, setWizardStep] = useState(userWizardStep);

    const[user, setUser] = useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            newsletter: false,
            terms: false
        });

    const[wizard, setWizard] = useState(
        {
            name: "",
            level: 0,
            school: "",
            alignment: Alignment.GOOD
        });

    const[sidekick, setSidekick] = useState(
        {
            name: "",
            skill: ""
        });
    
    return (
        <>
            <h1>Wizard Signup Wizard</h1>
            {wizardStep == 1 && <UserStepForm onComplete={(e:FormEvent, user:User) => onUserComplete(e, user)} />}
            {wizardStep == 2 && <WizardStepForm onComplete={(e:FormEvent, wizard:Wizard) => onWizardComplete(e, wizard)} />}
            {wizardStep == 3 && <SidekickStepForm onComplete={(e:FormEvent, sidekick:Sidekick) => onSidekickComplete(e, sidekick)} />}
            {wizardStep == 4 && <ConfirmationStep onComplete={() => resetData()} user={user} wizard={wizard} sidekick={sidekick} />}
        </>
    );
}

export default SignupFlow;