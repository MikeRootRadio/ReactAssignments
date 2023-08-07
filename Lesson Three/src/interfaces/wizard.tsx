import { Alignment } from "../enums/Alignment";

export interface Wizard {
    name: string;
    level: number;
    school: string;
    alignment: Alignment;
}