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
var http_1 = require("@angular/common/http");
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
//# sourceMappingURL=api.service.js.map