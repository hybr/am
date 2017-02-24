import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { PACKAGES } from './package.mock';
import { Package } from './package.model';

@Injectable()
export class PackageService {

    constructor(private http: Http) { }

    private headers = new Headers({'Content-Type': 'application/json'});
    private packagesUrl = 'api/heroes';  // URL to web api

    getPackages(): Promise<Package[]> {
        return Promise.resolve( PACKAGES );
    }
    
/*    getPackages(): Promise<Package[]> {
      return this.http.get(this.packagesUrl)
                 .toPromise()
                 .then(response => response.json().data as Package[])
                 .catch(this.handleError);
    }*/


/*    getPackage(id: number): Promise<Package> {
      const url = `${this.packagesUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Package)
        .catch(this.handleError);
    }*/

    getPackage(id: number): Promise<Package> {
        return Promise.resolve( PACKAGES[0] );
    }
    
    delete(id: number): Promise<void> {
      const url = `${this.packagesUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    create(name: string): Promise<Package> {
      return this.http
        .post(this.packagesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

    update(inputPackage: Package): Promise<Package> {
      const url = `${this.packagesUrl}/${inputPackage.id}`;
      return this.http
        .put(url, JSON.stringify(inputPackage), {headers: this.headers})
        .toPromise()
        .then(() => inputPackage)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}