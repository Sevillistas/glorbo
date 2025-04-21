import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { OFFICE_COORDINATE_LIST, OFFICE_LIST, OFFICE_PHONE_NUMBER_LIST } from '../mock';
import { Office, OfficeContacts, OfficeCoordinates } from '../models/office.models';

@Injectable({
    providedIn: 'root',
})
export class OfficeApiService {
    list(): Observable<Office[]> {
        return of(OFFICE_LIST);
    }

    getCoordinates(officeId: string): Observable<OfficeCoordinates> {
        return of(OFFICE_COORDINATE_LIST).pipe(map((list) => list.find((item) => item.officeId === officeId)!));
    }

    listContacts(officeIds: string[]): Observable<OfficeContacts[]> {
        return of(OFFICE_PHONE_NUMBER_LIST).pipe(
            map((list) => list.filter((item) => officeIds.includes(item.officeId)))
        );
    }
}
