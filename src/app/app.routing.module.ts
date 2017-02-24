import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PackageListComponent } from './package/list/package.component';
import { PackageDetailComponent } from './package/detail/package.component';

const appRoutes: Routes = [
    { path: 'packages', component: PackageListComponent },
    { path: 'package/detail/:id', component: PackageDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}