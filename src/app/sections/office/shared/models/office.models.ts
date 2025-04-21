export interface Office {
    id: string;
    name: string;
}

export interface OfficeCoordinates {
    officeId: string;
    coordinates: [number, number];
}

export interface OfficeContacts {
    officeId: string;
    phoneNumber: string;
}

export type OfficeView = Office & Omit<OfficeCoordinates, 'officeId'> & Omit<OfficeContacts, 'officeId'>;
