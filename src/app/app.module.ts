import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PackageListComponent } from './package/list/package.component';
import { PackageDetailComponent } from './package/detail/package.component';


const appRoutes: Routes = [
    { path: 'packages', component: PackageListComponent }
];

@NgModule( {
    declarations: [
        AppComponent,
        PackageListComponent,
        PackageDetailComponent
    ],
    imports: [
        RouterModule.forRoot( appRoutes ),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
