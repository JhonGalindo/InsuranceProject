import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListInsuranceComponent } from './list-insurance/list-insurance.component'; 
import { AddInsuranceComponent } from './add-insurance/add-insurance.component'; 
import { EditInsuranceComponent } from './edit-insurance/edit-insurance.component'; 
import { ApiService } from "./core/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { routing } from "./app.routing";
import { TokenInterceptor } from "./core/interceptor";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AddClientComponent,
        EditClientComponent,
        ListClientComponent,
        ListInsuranceComponent,
        AddInsuranceComponent,
        EditInsuranceComponent 
    ],
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [ApiService, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }