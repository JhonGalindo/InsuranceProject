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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var api_service_1 = require("../core/api.service");
var http_1 = require("@angular/common/http");
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
            templateUrl: './edit-insurance.component.html',
            styleUrls: ['./edit-insurance.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService])
    ], EditInsuranceComponent);
    return EditInsuranceComponent;
}());
exports.EditInsuranceComponent = EditInsuranceComponent;
//# sourceMappingURL=edit-insurance.component.js.map