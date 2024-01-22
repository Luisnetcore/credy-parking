import { Driver } from "./Driver";

export interface Vehicle {
    plaque: string;
    type: string;
    driver: Driver
    dateAdmision: string;
    formattedTime:string;
    totalAmount: number;
    inPraking: boolean
}