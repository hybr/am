
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { PackageListComponent } from './package/list/package.component';
import { PackageDetailComponent } from './package/detail/package.component';

@NgModule( {
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule.forRoot()
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
