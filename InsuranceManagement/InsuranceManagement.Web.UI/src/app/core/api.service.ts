import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Client} from "../model/client.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";
import { Insurance } from '../model/insurance.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
    baseUrlClient: string = 'http://localhost:44345/api/customers/';
    baseUrlInsurances: string = 'http://localhost:44345/api/policies/';
    baseUrlTypeRisk: string = 'http://localhost:44345/api/risktype';
    baseUrlTypeCovering: string = 'http://localhost:44345/api/coveringtype';

      login(loginPayload) : Observable<ApiResponse> {
          return this.http.post<ApiResponse>('http://localhost:50641/' + 'api/login/authenticate', loginPayload);
      }

      getClients() : Observable<ApiResponse> {
          return this.http.get<ApiResponse>(this.baseUrlClient);
      }

      getClientById(id: number): Observable<ApiResponse> {
          return this.http.get<ApiResponse>(this.baseUrlClient + id);
      }

      createClient(client: Client): Observable<ApiResponse> {
          return this.http.post<ApiResponse>(this.baseUrlClient, client);
      }

      updateClient(client: Client): Observable<ApiResponse> {
            return this.http.put<ApiResponse>(this.baseUrlClient + client.IdCliente, client);
      }

      getInsurancesClient(id: number): Observable<ApiResponse> {
          return this.http.get<ApiResponse>(this.baseUrlInsurances + 'polizascliente/' + id);
      }

    getInsurances(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrlInsurances);
    }

    createInsurance(insurance: Insurance): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.baseUrlInsurances, insurance);
    }

    updateInsurance(insurance: Insurance): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(this.baseUrlInsurances + insurance.IdPoliza, insurance);
    }

    getInsuranceById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrlInsurances + 'polizabyid/' + id);
    }

    getTypesRisk(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrlTypeRisk);
    }

    getTypesCovering(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrlTypeCovering);
    }
}
