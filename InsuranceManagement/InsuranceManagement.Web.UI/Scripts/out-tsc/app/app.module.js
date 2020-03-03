"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var add_client_component_1 = require("./add-client/add-client.component");
var edit_client_component_1 = require("./edit-client/edit-client.component");
var list_client_component_1 = require("./list-client/list-client.component");
var list_insurance_component_1 = require("./list-insurance/list-insurance.component");
var add_insurance_component_1 = require("./add-insurance/add-insurance.component");
var edit_insurance_component_1 = require("./edit-insurance/edit-insurance.component");
var api_service_1 = require("./core/api.service");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var interceptor_1 = require("./core/interceptor");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                add_client_component_1.AddClientComponent,
                edit_client_component_1.EditClientComponent,
                list_client_component_1.ListClientComponent,
                list_insurance_component_1.ListInsuranceComponent,
                add_insurance_component_1.AddInsuranceComponent,
                edit_insurance_component_1.EditInsuranceComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule
            ],
            providers: [api_service_1.ApiService, {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: interceptor_1.TokenInterceptor,
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map