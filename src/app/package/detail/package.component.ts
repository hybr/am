
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'; 

import { Package } from './../package.model';
import { PackageService } from './../package.service';


@Component( {
    // moduleId: module.id,
    selector: 'app-package-detail',
    templateUrl: './package.component.html',
    styleUrls: ['./../package.component.css']
})
export class PackageDetailComponent implements OnInit {
    inputPackage: Package;

    constructor(
        private packageService: PackageService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap(( params: Params ) => this.packageService.getPackage( +params['id'] ) )
            .subscribe( inputPackage => this.inputPackage = inputPackage );
    }

    save(): void {
        this.packageService.update( this.inputPackage )
            .then(() => this.goBack() );
    }

    goBack(): void {
        this.location.back();
    }
}