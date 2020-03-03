import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddClientComponent} from "./add-client/add-client.component";
import {ListClientComponent} from "./list-client/list-client.component";
import { EditClientComponent } from "./edit-client/edit-client.component";
import { ListInsuranceComponent } from "./list-insurance/list-insurance.component";
import { AddInsuranceComponent } from "./add-insurance/add-insurance.component";
import { EditInsuranceComponent } from "./edit-insurance/edit-insurance.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'add-client', component: AddClientComponent },
    { path: 'list-client', component: ListClientComponent },
    { path: 'edit-client', component: EditClientComponent },
    { path: '', component: LoginComponent },
    { path: 'list-insurance', component: ListInsuranceComponent },
    { path: 'add-insurance', component: AddInsuranceComponent },
    { path: 'edit-insurance', component: EditInsuranceComponent },
];

export const routing = RouterModule.forRoot(routes);
