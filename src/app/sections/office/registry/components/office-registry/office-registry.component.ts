import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-office-registry',
    imports: [],
    templateUrl: './office-registry.component.html',
    styleUrl: './office-registry.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OfficeRegistryComponent {
    constructor() {}
}
