import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { OfficeView } from '../../../shared/models/office.models';

@Component({
    selector: 'app-office-registry-item',
    imports: [],
    templateUrl: './office-registry-item.component.html',
    styleUrl: './office-registry-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficeRegistryItemComponent {
    readonly item = input.required<OfficeView>();
}
