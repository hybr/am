
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { PackageListComponent } from './package/list/package.component';
import { PackageDetailComponent } from './package/detail/package.component';

@NgModule( {
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PackageListComponent,
        PackageDetailComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
