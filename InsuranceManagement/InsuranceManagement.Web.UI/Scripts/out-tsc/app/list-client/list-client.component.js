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
var api_service_1 = require("../core/api.service");
var http_1 = require("@angular/common/http");
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
            templateUrl: './list-client.component.html',
            styleUrls: ['./list-client.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, api_service_1.ApiService])
    ], ListClientComponent);
    return ListClientComponent;
}());
exports.ListClientComponent = ListClientComponent;
//# sourceMappingURL=list-client.component.js.map