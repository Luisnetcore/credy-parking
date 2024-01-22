import { Driver } from "./Driver";

export interface Vehicle {
    plaque: string;
    type: string;
    driver: Driver
    dateAdmision: string;
    formattedTime:string;
    totalAmount: number;
    inParking: boolean
}

export interface VehicleRegister{
    plaque: string;
    type: string;
    driver: Driver;
    entryTime:string;
}