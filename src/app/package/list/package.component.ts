import { Component, OnInit } from '@angular/core';

import { Package } from './../package.model';
import { PackageService } from './../package.service';
import { PackageDetailComponent } from './../detail/package.component';

@Component( {
    selector: 'app-package',
    templateUrl: './package.component.html',
    styleUrls: ['./../package.component.css'],
    providers: [PackageService]
})
export class PackageListComponent implements OnInit {

    packages;
    selectedPackage: Package;

    constructor( private packageService: PackageService ) { }

    ngOnInit() {
        this.getPackages();
    }



    onSelect( singlePackage: Package ): void {
        this.selectedPackage = singlePackage;
    }

    getPackages(): void {
        this.packageService.getPackages().then(
            packages => this.packages = packages
        );

    }
}
