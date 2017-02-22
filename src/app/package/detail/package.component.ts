import { Component, Input } from '@angular/core';

import { Package } from './../package.model';

@Component( {
    selector: 'app-package-detail',
    templateUrl: './package.component.html',
    styleUrls: ['./../package.component.css']
})
export class PackageDetailComponent  {

    constructor(  ) { }
    
    @Input()
    inputPackage: Package;
}
