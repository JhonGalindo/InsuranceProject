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
            templateUrl: './edit-client.component.html',
            styleUrls: ['./edit-client.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, api_service_1.ApiService])
    ], EditClientComponent);
    return EditClientComponent;
}());
exports.EditClientComponent = EditClientComponent;
//# sourceMappingURL=edit-client.component.js.map