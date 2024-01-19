import { Vehicle } from "../../app/shared/model/Vehicle";

export let vehicles: Vehicle[] = [
    {
        plaque: "ABC123",
        type: "Carro",
        driver: {
            identification: "987654321",
            names: "John Doe"
        },
        dateAdmision: '14:23:00',
        totalAmount:1200,
        inPraking:true,
    },
    {
        plaque: "GHI345",
        type: "Carro",
        driver: {
            identification: "1112131416",
            names: "Luis Medina"
        },
        dateAdmision: '14:23:00',
        totalAmount:1200,
        inPraking:true,
    },
    {
        plaque: "GHI345",
        type: "Carro",
        driver: {
            identification: "123456789",
            names: "Pedro Perez"
        },
        dateAdmision: '14:23:00',
        totalAmount:1200,
        inPraking:true,
    },
    {
        plaque: "GW todo terreno",
        type: "Bicicleta",
        driver: {
            identification: "123456689",
            names: "Alfredo"
        },
        dateAdmision: '14:23:00',
        totalAmount:1200,
        inPraking:true,
    },
    {
        plaque: "Tucana Green",
        type: "Bicicleta",
        driver: {
            identification: "123456785",
            names: "Norberto"
        },
        dateAdmision: '14:23:00',
        totalAmount:1200,
        inPraking:true,
    },
    {
        plaque: "ABC 78A",
        type: "Motocicleta",
        driver: {
            identification: "3457896565",
            names: "Juan Perez"
        },
        dateAdmision: '14:23:00',
        totalAmount:1200,
        inPraking:true,
    }
];