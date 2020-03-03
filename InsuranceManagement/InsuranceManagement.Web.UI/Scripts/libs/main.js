(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-client/add-client.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-client/add-client.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jbGllbnQvYWRkLWNsaWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-client/add-client.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-client/add-client.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\n  <h2 class=\"text-center\">Adicionar Cliente</h2>\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\" novalidate=\"\">\n    <div class=\"form-group\">\n      <label for=\"Nombres\">Nombres:</label>\n      <input type=\"text\" maxlength=\"50\" formControlName=\"Nombres\" placeholder=\"Nombres\" name=\"Nombres\" class=\"form-control\" id=\"Nombres\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Apellidos\">Apellidos:</label>\n      <input type=\"text\" maxlength=\"50\" formControlName=\"Apellidos\" placeholder=\"Apellidos\" name=\"Apellidos\" class=\"form-control\" id=\"Apellidos\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"FechaNacimiento\">Fecha de nacimiento:</label>\n      <input type=\"date\" formControlName=\"FechaNacimiento\" placeholder=\"Fecha de nacimiento\" name=\"FechaNacimiento\" class=\"form-control\" id=\"FechaNacimiento\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Cedula\">C�dula:</label>\n      <input type=\"number\" maxlength=\"10\" formControlName=\"Cedula\" placeholder=\"C�dula\" name=\"Cedula\" class=\"form-control\" id=\"Cedula\">\n    </div>\n\n    <button class=\"btn btn-success\" [disabled]=\"addForm.invalid\">Crear</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-client/add-client.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-client/add-client.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var api_service_1 = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(formBuilder, router, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiService = apiService;
    }
    AddClientComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            IdCliente: [],
            Nombres: ['', [forms_1.Validators.required, forms_1.Validators.minLength(50)]],
            Apellidos: ['', [forms_1.Validators.required, forms_1.Validators.minLength(50)]],
            FechaNacimiento: ['', forms_1.Validators.required],
            Cedula: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]]
        });
    };
    AddClientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.apiService.createClient(this.addForm.value)
            .subscribe(function (data) {
            if (data.status === 200) {
                alert('Cliente creado satisfactoriamente.');
                _this.router.navigate(['list-client']);
            }
            else {
                // Error en la validaci�n de la cobertura de la poliza mostrar mensaje al cliente
                alert('El porcentaje de cubrimiento no puede ser superior al 50% ya que el riesgo es Alto');
            }
        });
    };
    AddClientComponent = __decorate([
        core_1.Component({
            selector: 'app-add-client',
            template: __webpack_require__(/*! ./add-client.component.html */ "./src/app/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.css */ "./src/app/add-client/add-client.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, api_service_1.ApiService])
    ], AddClientComponent);
    return AddClientComponent;
}());
exports.AddClientComponent = AddClientComponent;


/***/ }),

/***/ "./src/app/add-insurance/add-insurance.component.css":
/*!***********************************************************!*\
  !*** ./src/app/add-insurance/add-insurance.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1pbnN1cmFuY2UvYWRkLWluc3VyYW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-insurance/add-insurance.component.html":
/*!************************************************************!*\
  !*** ./src/app/add-insurance/add-insurance.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\r\n    <h2 class=\"text-center\">Adicionar P�liza</h2>\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"Nombre\">Nombre:</label>\r\n            <input type=\"text\" maxlength=\"50\" formControlName=\"Nombre\" placeholder=\"Nombre\" name=\"Nombre\" class=\"form-control\" id=\"Nombre\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"Descripcion\">Descripci�n:</label>\r\n            <input type=\"text\" maxlength=\"200\" formControlName=\"Descripcion\" placeholder=\"Descripcion\" name=\"Descripcion\" class=\"form-control\" id=\"Descripcion\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"FechaInicioVigencia\">Fecha de nacimiento:</label>\r\n            <input type=\"date\" formControlName=\"FechaInicioVigencia\" placeholder=\"Fecha inicio vigencia\" name=\"FechaInicioVigencia\" class=\"form-control\" id=\"FechaInicioVigencia\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"PeriodoCobertura\">Per�odo de cobertura:</label>\r\n            <input type=\"number\" maxlength=\"3\" formControlName=\"PeriodoCobertura\" placeholder=\"Per�odo de cobertura\" name=\"PeriodoCobertura\" class=\"form-control\" id=\"PeriodoCobertura\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"PrecioPoliza\">Precio p�liza:</label>\r\n            <input type=\"number\" maxlength=\"7\" formControlName=\"PrecioPoliza\" placeholder=\"Precio p�liza\" name=\"PrecioPoliza\" class=\"form-control\" id=\"PrecioPoliza\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"typecovering\">Tipo covertura:</label>\r\n            <select formControlName=\"IdTipoCubrimiento\" id=\"IdTipoCubrimiento\">\r\n                <option value=\"0\"></option>\r\n                <option *ngFor=\"let tytypepecovering of typescovering; let i = index\" [value]=\"typescovering[i].IdTipoCubrimiento\">\r\n                    {{typescovering[i].Nombre}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"typerisk\">Tipo riesgo:</label>\r\n            <select formControlName=\"IdTipoRiesgo\" id=\"IdTipoRiesgo\">\r\n                <option value=\"0\"></option>\r\n                <option *ngFor=\"let type of typesrisk; let i = index\" [value]=\"typesrisk[i].IdTipoRiesgo\">\r\n                    {{typesrisk[i].Nombre}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"Cobertura\">Cobertura:</label>\r\n            <input type=\"number\" maxlength=\"3\" formControlName=\"Cobertura\" placeholder=\"Cobertura\" name=\"Cobertura\" class=\"form-control\" id=\"Cobertura\">\r\n        </div>\r\n\r\n        <button class=\"btn btn-success\">Crear</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-insurance/add-insurance.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-insurance/add-insurance.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var api_service_1 = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var AddInsuranceComponent = /** @class */ (function () {
    function AddInsuranceComponent(formBuilder, router, activatedRoute, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
    }
    AddInsuranceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addForm = this.formBuilder.group({
            IdPoliza: [],
            IdCliente: 0,
            Nombre: [null, forms_1.Validators.required],
            Descripcion: [null, forms_1.Validators.required],
            FechaInicioVigencia: [null, forms_1.Validators.required],
            PeriodoCobertura: [null, forms_1.Validators.required],
            PrecioPoliza: [null, forms_1.Validators.required],
            IdTipoCubrimiento: [null, forms_1.Validators.required],
            IdTipoRiesgo: [null, forms_1.Validators.required],
            Cobertura: [null, forms_1.Validators.required]
        });
        this.sub = this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this.clientId = params.get("clientId");
            if (!_this.clientId) {
                alert("Invalid action.");
                _this.router.navigate(['list-client']);
                return;
            }
            _this.apiService.getTypesCovering()
                .subscribe(function (data) {
                _this.typescovering = data.result;
            }, function (error) {
                if (error instanceof http_1.HttpErrorResponse) {
                    switch (error.status) {
                        case 0: //login
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                        case 401: //login
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                        case 403: //
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                    }
                }
            });
            _this.apiService.getTypesRisk()
                .subscribe(function (data) {
                _this.typesrisk = data.result;
            }, function (error) {
                if (error instanceof http_1.HttpErrorResponse) {
                    switch (error.status) {
                        case 0: //login
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                        case 401: //login
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                        case 403: //
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                    }
                }
            });
        });
    };
    AddInsuranceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.addForm.get('IdCliente').setValue(this.clientId);
        this.apiService.createInsurance(this.addForm.value)
            .subscribe(function (data) {
            if (data.status === 200) {
                alert('Poliza creada satisfactoriamente.');
                _this.router.navigate(['list-insurance'], { queryParams: { clientId: _this.clientId } });
            }
            else {
                // Error en la validaci�n de la cobertura de la poliza mostrar mensaje al cliente
                alert('El porcentaje de cubrimiento no puede ser superior al 50%');
            }
        });
    };
    AddInsuranceComponent = __decorate([
        core_1.Component({
            selector: 'app-add-insurance',
            template: __webpack_require__(/*! ./add-insurance.component.html */ "./src/app/add-insurance/add-insurance.component.html"),
            styles: [__webpack_require__(/*! ./add-insurance.component.css */ "./src/app/add-insurance/add-insurance.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService])
    ], AddInsuranceComponent);
    return AddInsuranceComponent;
}());
exports.AddInsuranceComponent = AddInsuranceComponent;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'App';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var add_client_component_1 = __webpack_require__(/*! ./add-client/add-client.component */ "./src/app/add-client/add-client.component.ts");
var edit_client_component_1 = __webpack_require__(/*! ./edit-client/edit-client.component */ "./src/app/edit-client/edit-client.component.ts");
var list_client_component_1 = __webpack_require__(/*! ./list-client/list-client.component */ "./src/app/list-client/list-client.component.ts");
var list_insurance_component_1 = __webpack_require__(/*! ./list-insurance/list-insurance.component */ "./src/app/list-insurance/list-insurance.component.ts");
var add_insurance_component_1 = __webpack_require__(/*! ./add-insurance/add-insurance.component */ "./src/app/add-insurance/add-insurance.component.ts");
var edit_insurance_component_1 = __webpack_require__(/*! ./edit-insurance/edit-insurance.component */ "./src/app/edit-insurance/edit-insurance.component.ts");
var api_service_1 = __webpack_require__(/*! ./core/api.service */ "./src/app/core/api.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var app_routing_1 = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var interceptor_1 = __webpack_require__(/*! ./core/interceptor */ "./src/app/core/interceptor.ts");
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


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var add_client_component_1 = __webpack_require__(/*! ./add-client/add-client.component */ "./src/app/add-client/add-client.component.ts");
var list_client_component_1 = __webpack_require__(/*! ./list-client/list-client.component */ "./src/app/list-client/list-client.component.ts");
var edit_client_component_1 = __webpack_require__(/*! ./edit-client/edit-client.component */ "./src/app/edit-client/edit-client.component.ts");
var list_insurance_component_1 = __webpack_require__(/*! ./list-insurance/list-insurance.component */ "./src/app/list-insurance/list-insurance.component.ts");
var add_insurance_component_1 = __webpack_require__(/*! ./add-insurance/add-insurance.component */ "./src/app/add-insurance/add-insurance.component.ts");
var edit_insurance_component_1 = __webpack_require__(/*! ./edit-insurance/edit-insurance.component */ "./src/app/edit-insurance/edit-insurance.component.ts");
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


/***/ }),

/***/ "./src/app/core/api.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/api.service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrlClient = 'http://localhost:50641/api/cliente/';
        this.baseUrlInsurances = 'http://localhost:50641/api/poliza/';
        this.baseUrlTypeRisk = 'http://localhost:50641/api/tiporiesgo';
        this.baseUrlTypeCovering = 'http://localhost:50641/api/tipocubrimiento';
    }
    ApiService.prototype.login = function (loginPayload) {
        return this.http.post('http://localhost:50641/' + 'api/login/authenticate', loginPayload);
    };
    ApiService.prototype.getClients = function () {
        return this.http.get(this.baseUrlClient);
    };
    ApiService.prototype.getClientById = function (id) {
        return this.http.get(this.baseUrlClient + id);
    };
    ApiService.prototype.createClient = function (client) {
        return this.http.post(this.baseUrlClient, client);
    };
    ApiService.prototype.updateClient = function (client) {
        return this.http.put(this.baseUrlClient + client.IdCliente, client);
    };
    ApiService.prototype.getInsurancesClient = function (id) {
        return this.http.get(this.baseUrlInsurances + 'polizascliente/' + id);
    };
    ApiService.prototype.getInsurances = function () {
        return this.http.get(this.baseUrlInsurances);
    };
    ApiService.prototype.createInsurance = function (insurance) {
        return this.http.post(this.baseUrlInsurances, insurance);
    };
    ApiService.prototype.updateInsurance = function (insurance) {
        return this.http.put(this.baseUrlInsurances + insurance.IdPoliza, insurance);
    };
    ApiService.prototype.getInsuranceById = function (id) {
        return this.http.get(this.baseUrlInsurances + 'polizabyid/' + id);
    };
    ApiService.prototype.getTypesRisk = function () {
        return this.http.get(this.baseUrlTypeRisk);
    };
    ApiService.prototype.getTypesCovering = function () {
        return this.http.get(this.baseUrlTypeCovering);
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;


/***/ }),

/***/ "./src/app/core/interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/core/interceptor.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var token = window.localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token,
                    observe: 'response'
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        core_1.Injectable()
    ], TokenInterceptor);
    return TokenInterceptor;
}());
exports.TokenInterceptor = TokenInterceptor;


/***/ }),

/***/ "./src/app/edit-client/edit-client.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-client/edit-client.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY2xpZW50L2VkaXQtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/edit-client/edit-client.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-client/edit-client.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\n  <h2 class=\"text-center\">Editar Cliente</h2>\n  <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"hidden\">\n      <input type=\"text\" formControlName=\"IdCliente\" placeholder=\"idcliente\" name=\"IdCliente\" class=\"form-control\" id=\"IdCliente\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"Nombres\">Nombres:</label>\n      <input type=\"text\" maxlength=\"50\" formControlName=\"Nombres\" placeholder=\"Nombres\" name=\"Nombres\" class=\"form-control\" id=\"Nombres\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"apellidos\">Apellidos:</label>\n      <input type=\"text\" maxlength=\"50\" formControlName=\"Apellidos\" placeholder=\"Apellidos\" name=\"Apellidos\" class=\"form-control\" id=\"Apellidos\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"fechanacimiento\">Fecha de nacimiento:</label>\n      <input type=\"date\" formControlName=\"FechaNacimiento\" placeholder=\"Fecha de nacimiento\" name=\"FechaNacimiento\" class=\"form-control\" id=\"FechaNacimiento\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"cedula\">Cedula:</label>\n      <input type=\"number\" maxlength=\"10\" formControlName=\"Cedula\" placeholder=\"C�dula\" name=\"Cedula\" class=\"form-control\" id=\"Cedula\">\n    </div>\n\n    <button class=\"btn btn-success\">Actualizar</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-client/edit-client.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-client/edit-client.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var api_service_1 = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(formBuilder, router, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiService = apiService;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        var clientId = window.localStorage.getItem("editClientId");
        if (!clientId) {
            alert("Invalid action.");
            this.router.navigate(['list-client']);
            return;
        }
        this.editForm = this.formBuilder.group({
            IdCliente: [''],
            Nombres: ['', forms_1.Validators.required],
            Apellidos: ['', forms_1.Validators.required],
            FechaNacimiento: ['', forms_1.Validators.required],
            Cedula: ['', forms_1.Validators.required]
        });
        this.apiService.getClientById(+clientId)
            .subscribe(function (data) {
            _this.editForm.setValue(data.result);
            _this.editForm.get('FechaNacimiento').setValue(_this.editForm.get('FechaNacimiento').value.slice(0, 10));
        });
    };
    EditClientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.apiService.updateClient(this.editForm.value)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            if (data.status === 200) {
                alert('Cliente actualizado satisfactoriamente.');
                _this.router.navigate(['list-client']);
            }
            else {
                alert(data.message);
            }
        }, function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                switch (error.status) {
                    case 0: //login
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                    case 401: //login
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                    case 403: //
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                }
            }
        });
    };
    EditClientComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-client',
            template: __webpack_require__(/*! ./edit-client.component.html */ "./src/app/edit-client/edit-client.component.html"),
            styles: [__webpack_require__(/*! ./edit-client.component.css */ "./src/app/edit-client/edit-client.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, api_service_1.ApiService])
    ], EditClientComponent);
    return EditClientComponent;
}());
exports.EditClientComponent = EditClientComponent;


/***/ }),

/***/ "./src/app/edit-insurance/edit-insurance.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edit-insurance/edit-insurance.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtaW5zdXJhbmNlL2VkaXQtaW5zdXJhbmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/edit-insurance/edit-insurance.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edit-insurance/edit-insurance.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\n  <h2 class=\"text-center\">Editar P�liza</h2>\n  <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"hidden\">\r\n          <input type=\"text\" formControlName=\"IdPoliza\" placeholder=\"IdPoliza\" name=\"IdPoliza\" class=\"form-control\" id=\"IdPoliza\">\r\n      </div>\r\n      <div class=\"hidden\">\r\n          <input type=\"text\" formControlName=\"Estado\" placeholder=\"Estado\" name=\"Estado\" class=\"form-control\" id=\"Estado\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"Nombre\">Nombre:</label>\r\n          <input type=\"text\" maxlength=\"50\" formControlName=\"Nombre\" placeholder=\"Nombre\" name=\"Nombre\" class=\"form-control\" id=\"Nombre\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label for=\"Descripcion\">Descripci�n:</label>\r\n          <input type=\"text\" maxlength=\"200\" formControlName=\"Descripcion\" placeholder=\"Descripcion\" name=\"Descripcion\" class=\"form-control\" id=\"Descripcion\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label for=\"FechaInicioVigencia\">Fecha de nacimiento:</label>\r\n          <input type=\"date\" formControlName=\"FechaInicioVigencia\" placeholder=\"Fecha inicio vigencia\" name=\"FechaInicioVigencia\" class=\"form-control\" id=\"FechaInicioVigencia\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label for=\"PeriodoCobertura\">Per�odo de cobertura:</label>\r\n          <input type=\"number\" maxlength=\"3\" formControlName=\"PeriodoCobertura\" placeholder=\"Per�odo de cobertura\" name=\"PeriodoCobertura\" class=\"form-control\" id=\"PeriodoCobertura\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label for=\"PrecioPoliza\">Precio p�liza:</label>\r\n          <input type=\"number\" maxlength=\"7\" formControlName=\"PrecioPoliza\" placeholder=\"Precio p�liza\" name=\"PrecioPoliza\" class=\"form-control\" id=\"PrecioPoliza\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label for=\"typecovering\">Tipo covertura:</label>\r\n          <select formControlName=\"IdTipoCubrimiento\" id=\"IdTipoCubrimiento\">\r\n              <option value=\"0\"></option>\r\n              <option *ngFor=\"let tytypepecovering of typescovering; let i = index\" [value]=\"typescovering[i].IdTipoCubrimiento\">\r\n                  {{typescovering[i].Nombre}}\r\n              </option>\r\n          </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"typerisk\">Tipo riesgo:</label>\r\n          <select formControlName=\"IdTipoRiesgo\" id=\"IdTipoRiesgo\">\r\n              <option value=\"0\"></option>\r\n              <option *ngFor=\"let type of typesrisk; let i = index\" [value]=\"typesrisk[i].IdTipoRiesgo\">\r\n                  {{typesrisk[i].Nombre}}\r\n              </option>\r\n          </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label for=\"Cobertura\">Cobertura:</label>\r\n          <input type=\"number\" maxlength=\"3\" formControlName=\"Cobertura\" placeholder=\"Cobertura\" name=\"Cobertura\" class=\"form-control\" id=\"Cobertura\">\r\n      </div>\r\n\r\n      <button class=\"btn btn-success\">Actualizar</button>\r\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-insurance/edit-insurance.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-insurance/edit-insurance.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var api_service_1 = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var EditInsuranceComponent = /** @class */ (function () {
    function EditInsuranceComponent(formBuilder, router, activatedRoute, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
    }
    EditInsuranceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            IdPoliza: [],
            IdCliente: [],
            Nombre: [null, forms_1.Validators.required],
            Descripcion: [null, forms_1.Validators.required],
            FechaInicioVigencia: [null, forms_1.Validators.required],
            PeriodoCobertura: [null, forms_1.Validators.required],
            PrecioPoliza: [null, forms_1.Validators.required],
            IdTipoCubrimiento: [null, forms_1.Validators.required],
            IdTipoRiesgo: [null, forms_1.Validators.required],
            Cobertura: [null, forms_1.Validators.required],
            Estado: [],
            TipoRiesgo: [],
            TipoCubrimiento: []
        });
        this.sub = this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this.insuranceId = params.get("insuranceId");
            if (!_this.insuranceId) {
                alert("Invalid action.");
                _this.router.navigate(['list-insurance']);
                return;
            }
            _this.apiService.getTypesCovering()
                .subscribe(function (data) {
                _this.typescovering = data.result;
                _this.apiService.getInsuranceById(+_this.insuranceId)
                    .subscribe(function (data) {
                    _this.editForm.setValue(data.result);
                    _this.editForm.get('FechaInicioVigencia').setValue(_this.editForm.get('FechaInicioVigencia').value.slice(0, 10));
                    console.log(_this.editForm.get('FechaInicioVigencia').value.slice(0, 10));
                });
            }, function (error) {
                if (error instanceof http_1.HttpErrorResponse) {
                    switch (error.status) {
                        case 0: //login
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                        case 401: //login
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                        case 403: //
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                    }
                }
            });
            _this.apiService.getTypesRisk()
                .subscribe(function (data) {
                _this.typesrisk = data.result;
                _this.apiService.getInsuranceById(+_this.insuranceId)
                    .subscribe(function (data) {
                    _this.editForm.setValue(data.result);
                    _this.editForm.get('FechaInicioVigencia').setValue(_this.editForm.get('FechaInicioVigencia').value.slice(0, 10));
                    console.log(_this.editForm.get('FechaInicioVigencia').value.slice(0, 10));
                });
            }, function (error) {
                if (error instanceof http_1.HttpErrorResponse) {
                    switch (error.status) {
                        case 0: //login
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                        case 401: //login
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                        case 403: //
                            window.localStorage.removeItem("token");
                            window.localStorage.removeItem("editClientId");
                            _this.router.navigate(['login']);
                            break;
                    }
                }
            });
        });
    };
    EditInsuranceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.apiService.updateInsurance(this.editForm.value)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            if (data.status === 200) {
                alert('P�liza actualizada satisfactoriamente.');
                _this.router.navigate(['list-insurance'], { queryParams: { clientId: _this.editForm.value.IdCliente.toString() } });
            }
            else {
                alert('El porcentaje de cubrimiento no puede ser superior al 50% ya que el riesgo es Alto');
            }
        }, function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                switch (error.status) {
                    case 0: //login
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                    case 401: //login
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                    case 403: //
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                }
            }
        });
    };
    EditInsuranceComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-client',
            template: __webpack_require__(/*! ./edit-insurance.component.html */ "./src/app/edit-insurance/edit-insurance.component.html"),
            styles: [__webpack_require__(/*! ./edit-insurance.component.css */ "./src/app/edit-insurance/edit-insurance.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService])
    ], EditInsuranceComponent);
    return EditInsuranceComponent;
}());
exports.EditInsuranceComponent = EditInsuranceComponent;


/***/ }),

/***/ "./src/app/list-client/list-client.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-client/list-client.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1jbGllbnQvbGlzdC1jbGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY2xpZW50L2xpc3QtY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/list-client/list-client.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-client/list-client.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\n    <br />\n  <h2 style=\"margin: auto\"> Detalles cliente</h2>\n    <br />\n  <button class=\"btn btn-danger\" style=\"width:200px\" (click)=\"addClient()\"> Adicionar Cliente</button>\n    <br />\n  <table class=\"table table-striped\">\n    <thead>\n        <tr>\r\n            <th class=\"hidden\">Id</th>\r\n            <th>Nombres</th>\r\n            <th>Apellidos</th>\r\n            <th>Fecha de Nacimiento</th>\r\n            <th>Cedula</th>\r\n            <th></th>\r\n            <th></th>\r\n        </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let client of clients\">\n      <td class=\"hidden\">{{client.IdCliente}}</td>\n      <td>{{client.Nombres}}</td>\n      <td>{{client.Apellidos}}</td>\n      <td>{{client.FechaNacimiento}}</td>\n      <td>{{client.Cedula}}</td>\n      <td><button class=\"btn btn-success\" (click)=\"viewInsurancesClient(client)\" style=\"margin-left: 5px;\">Ver p�lizas</button></td>\n        <td><button class=\"btn btn-success\" (click)=\"editClient(client)\" style=\"margin-left: 5px;\">Editar</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/list-client/list-client.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-client/list-client.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var api_service_1 = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ListClientComponent = /** @class */ (function () {
    function ListClientComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    ListClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!window.localStorage.getItem('token')) {
            this.router.navigate(['login']);
            return;
        }
        this.apiService.getClients()
            .subscribe(function (data) {
            _this.clients = data.result;
        }, function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                switch (error.status) {
                    case 0: //login
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                    case 401: //login
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                    case 403:
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                }
            }
        });
    };
    ListClientComponent.prototype.viewInsurancesClient = function (client) {
        this.router.navigate(['list-insurance'], { queryParams: { clientId: client.IdCliente.toString() } });
    };
    ListClientComponent.prototype.editClient = function (client) {
        window.localStorage.removeItem("editClientId");
        window.localStorage.setItem("editClientId", client.IdCliente.toString());
        this.router.navigate(['edit-client']);
    };
    ;
    ListClientComponent.prototype.addClient = function () {
        this.router.navigate(['add-client']);
    };
    ;
    ListClientComponent = __decorate([
        core_1.Component({
            selector: 'app-list-client',
            template: __webpack_require__(/*! ./list-client.component.html */ "./src/app/list-client/list-client.component.html"),
            styles: [__webpack_require__(/*! ./list-client.component.css */ "./src/app/list-client/list-client.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, api_service_1.ApiService])
    ], ListClientComponent);
    return ListClientComponent;
}());
exports.ListClientComponent = ListClientComponent;


/***/ }),

/***/ "./src/app/list-insurance/list-insurance.component.css":
/*!*************************************************************!*\
  !*** ./src/app/list-insurance/list-insurance.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1pbnN1cmFuY2UvbGlzdC1pbnN1cmFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xpc3QtaW5zdXJhbmNlL2xpc3QtaW5zdXJhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/list-insurance/list-insurance.component.html":
/*!**************************************************************!*\
  !*** ./src/app/list-insurance/list-insurance.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\r\n    <br />\r\n    <h2 style=\"margin: auto\">Detalles de polizas</h2>\r\n    <br />\r\n    <button class=\"btn btn-danger\" style=\"width:200px\" (click)=\"addInsurance()\"> Adicionar poliza</button>\r\n    <br />\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th class=\"hidden\">Id</th>\r\n                <th>Nombre</th>\r\n                <th>Descripci�n</th>\r\n                <th>FechaInicioVigencia</th>\r\n                <th>Periodo cobertura</th>\r\n                <th>PrecioPoliza</th>\r\n                <th>Tipo cubrimiento</th>\r\n                <th>Tipo riesgo</th>\r\n                <th>Cobertura</th>\r\n                <th>Estado</th>\r\n                <th></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let insurance of insurances\">\r\n                <td class=\"hidden\">{{insurance.IdPoliza}}</td>\r\n                <td>{{insurance.Nombre}}</td>\r\n                <td>{{insurance.Descripcion}}</td>\r\n                <td>{{insurance.FechaInicioVigencia}}</td>\r\n                <td>{{insurance.PeriodoCobertura}}</td>\r\n                <td>{{insurance.PrecioPoliza}}</td>\r\n                <td>{{insurance.TipoCubrimiento.Nombre}}</td>\r\n                <td>{{insurance.TipoRiesgo.Nombre}}</td>\r\n                <td>{{insurance.Cobertura}}%</td>\r\n                <td>{{insurance.Estado ? 'Activo' : 'Cancelado'}}</td>\r\n                <td>\r\n                    <button class=\"btn btn-success\" (click)=\"cancelInsurance(insurance)\" style=\"margin-left: 5px;\">{{insurance.Estado ? 'Cancelar' : 'Activar'}}</button>\r\n                </td>\r\n                <td>\r\n                    <button class=\"btn btn-success\" (click)=\"editInsurance(insurance)\" style=\"margin-left: 5px;\">Editar</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\n"

/***/ }),

/***/ "./src/app/list-insurance/list-insurance.component.ts":
/*!************************************************************!*\
  !*** ./src/app/list-insurance/list-insurance.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var api_service_1 = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var ListInsuranceComponent = /** @class */ (function () {
    function ListInsuranceComponent(router, activatedRoute, apiService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
    }
    ListInsuranceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!window.localStorage.getItem('token')) {
            this.router.navigate(['login']);
            return;
        }
        this.sub = this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this.clientId = params.get("clientId");
            if (!_this.clientId) {
                alert("Invalid action.");
                _this.router.navigate(['list-client']);
                return;
            }
            _this.updateList();
        });
    };
    ListInsuranceComponent.prototype.updateList = function () {
        var _this = this;
        this.apiService.getInsurancesClient(+this.clientId) // (+) converts string 'insuranceId' to a number
            .subscribe(function (data) {
            _this.insurances = data.result;
        }, function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                switch (error.status) {
                    case 0: //login
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                    case 401: //login
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                    case 403: //
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                }
            }
        });
    };
    ListInsuranceComponent.prototype.editInsurance = function (insurance) {
        this.router.navigate(['edit-insurance'], { queryParams: { insuranceId: insurance.IdPoliza.toString() } });
    };
    ;
    ListInsuranceComponent.prototype.cancelInsurance = function (insurance) {
        var _this = this;
        insurance.Estado = !insurance.Estado;
        this.apiService.updateInsurance(insurance)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            if (data.status === 200) {
                if (!insurance.Estado) {
                    alert('P�liza cancelada satisfactoriamente.');
                }
                else {
                    alert('P�liza activada satisfactoriamente.');
                }
                _this.updateList();
            }
            else {
                alert(data.message);
            }
        }, function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                switch (error.status) {
                    case 0: //login
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                    case 401: //login
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                    case 403: //
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("editClientId");
                        _this.router.navigate(['login']);
                        break;
                }
            }
        });
    };
    ListInsuranceComponent.prototype.addInsurance = function () {
        this.router.navigate(['add-insurance'], { queryParams: { clientId: this.clientId.toString() } });
    };
    ;
    ListInsuranceComponent = __decorate([
        core_1.Component({
            selector: 'app-list-poliza',
            template: __webpack_require__(/*! ./list-insurance.component.html */ "./src/app/list-insurance/list-insurance.component.html"),
            styles: [__webpack_require__(/*! ./list-insurance.component.css */ "./src/app/list-insurance/list-insurance.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService])
    ], ListInsuranceComponent);
    return ListInsuranceComponent;
}());
exports.ListInsuranceComponent = ListInsuranceComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\n  color: #FF0000;\n}\n.login-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: blanchedalmond;\n  margin: 2em auto auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ye1xuICBjb2xvcjogI0ZGMDAwMDtcbn1cbi5sb2dpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbiAgbWFyZ2luOiAyZW0gYXV0byBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"col-md-6 login-container\">\r\n        <h2 style=\"margin: auto\">Login </h2>\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username:</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" autocomplete=\"off\">\r\n                <div class=\"error\" *ngIf=\"loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched\">Username is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"pwd\">Password:</label>\r\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"pwd\" autocomplete=\"off\">\r\n                <div class=\"error\" *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">Password is required</div>\r\n            </div>\r\n            <button class=\"btn btn-success\" [disabled]=\"loginForm.invalid\">Login</button>\r\n            <div *ngIf=\"invalidLogin\" class=\"error\">\r\n                <div>Credenciales invalidas.</div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var api_service_1 = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiService = apiService;
        this.invalidLogin = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        var loginPayload = {
            username: this.loginForm.controls.username.value,
            password: this.loginForm.controls.password.value
        };
        this.apiService.login(loginPayload).subscribe(function (data) {
            if (data.status === 200) {
                window.localStorage.setItem('token', data.result);
                _this.router.navigate(['list-client']);
            }
            else {
                _this.invalidLogin = true;
                //alert(data.message);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            password: ['', forms_1.Validators.required]
        });
        if (window.localStorage.getItem('token')) {
            this.router.navigate(['list-client']);
            return;
        }
        window.localStorage.removeItem('token');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, api_service_1.ApiService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\source\repos\TestSegurosGAP\TestSegurosGAP.Presentacion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map