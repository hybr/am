import { Injectable } from '@angular/core';

import { PACKAGES } from './package.mock';
import { Package } from './package.model';

@Injectable()
export class PackageService {

    constructor() { }

    getPackages(): Promise<Package[]> {
        return Promise.resolve( PACKAGES );
    }

}
