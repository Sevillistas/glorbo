import { Office, OfficeContacts, OfficeCoordinates } from './models/office.models';

export const OFFICE_LIST: Office[] = [
    {
        id: '1',
        name: 'Центральный офис',
    },
    {
        id: '2',
        name: 'Филиал на Ленина',
    },
    {
        id: '3',
        name: "Офис в бизнес-центре 'Парк'",
    },
    {
        id: '4',
        name: 'Складской комплекс',
    },
    {
        id: '5',
        name: 'Региональный филиал',
    },
];

export const OFFICE_COORDINATE_LIST: OfficeCoordinates[] = [
    {
        officeId: '1',
        coordinates: [55.7558, 37.6176],
    },
    {
        officeId: '2',
        coordinates: [59.9343, 30.3351],
    },
    {
        officeId: '3',
        coordinates: [56.8389, 60.6057],
    },
    {
        officeId: '4',
        coordinates: [53.9045, 27.5615],
    },
    {
        officeId: '5',
        coordinates: [43.2389, 76.8897],
    },
];

export const OFFICE_PHONE_NUMBER_LIST: OfficeContacts[] = [
    {
        officeId: '1',
        phoneNumber: '+79221960900',
    },
    {
        officeId: '2',
        phoneNumber: '+79221960910',
    },
    {
        officeId: '3',
        phoneNumber: '+79221960911',
    },
    {
        officeId: '4',
        phoneNumber: '+79221960920',
    },
    {
        officeId: '5',
        phoneNumber: '+79221960945',
    },
];
