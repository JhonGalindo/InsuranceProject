"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var add_client_component_1 = require("./add-client/add-client.component");
var list_client_component_1 = require("./list-client/list-client.component");
var edit_client_component_1 = require("./edit-client/edit-client.component");
var list_insurance_component_1 = require("./list-insurance/list-insurance.component");
var add_insurance_component_1 = require("./add-insurance/add-insurance.component");
var edit_insurance_component_1 = require("./edit-insurance/edit-insurance.component");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'add-client', component: add_client_component_1.AddClientComponent },
    { path: 'list-client', component: list_client_component_1.ListClientComponent },
    { path: 'edit-client', component: edit_client_component_1.EditClientComponent },
    { path: '', component: login_component_1.LoginComponent },
    { path: 'list-insurance', component: list_insurance_component_1.ListInsuranceComponent },
    { path: 'add-insurance', component: add_insurance_component_1.AddInsuranceComponent },
    { path: 'edit-insurance', component: edit_insurance_component_1.EditInsuranceComponent },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map