import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {ApiService} from "../core/api.service";
import { HttpErrorResponse } from '@angular/common/http';
import { TypeCovering } from '../model/typecovering.model';
import { TypeRisk } from '../model/typerisk.model';

@Component({
    selector: 'app-add-insurance',
    templateUrl: './add-insurance.component.html',
    styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

    typescovering: TypeCovering[];
    typesrisk: TypeRisk[];
    addForm: FormGroup;
    sub: any;
    clientId: string;

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            IdPoliza: [],
            IdCliente: 0,
            Nombre: [null, Validators.required],
            Descripcion: [null, Validators.required],
            FechaInicioVigencia: [null, Validators.required],
            PeriodoCobertura: [null, Validators.required],
            PrecioPoliza: [null, Validators.required],
            IdTipoCubrimiento: [null, Validators.required],
            IdTipoRiesgo: [null, Validators.required],
            Cobertura: [null, Validators.required]
        });

        this.sub = this.activatedRoute.queryParamMap.subscribe(params => {
            this.clientId = params.get("clientId");

            if (!this.clientId) {
                alert("Invalid action.")
                this.router.navigate(['list-client']);
                return;
            }

            this.apiService.getTypesCovering()
                .subscribe(data => {
                    this.typescovering = data.result;
                },
                error => {
                    if (error instanceof HttpErrorResponse) {
                        switch (error.status) {
                            case 0:      //login
                                window.localStorage.removeItem("token");
                                window.localStorage.removeItem("editClientId");
                                this.router.navigate(['login']);
                                break;
                            case 401:      //login
                                window.localStorage.removeItem("token");
                                window.localStorage.removeItem("editClientId");
                                this.router.navigate(['login']);
                                break;
                            case 403:     //
                                window.localStorage.removeItem("token");
                                window.localStorage.removeItem("editClientId");
                                this.router.navigate(['login']);
                                break;
                        }
                    }
                });

            this.apiService.getTypesRisk()
                .subscribe(data => {
                    this.typesrisk = data.result;
                },
                    error => {
                        if (error instanceof HttpErrorResponse) {
                            switch (error.status) {
                                case 0:      //login
                                    window.localStorage.removeItem("token");
                                    window.localStorage.removeItem("editClientId");
                                    this.router.navigate(['login']);
                                    break;
                                case 401:      //login
                                    window.localStorage.removeItem("token");
                                    window.localStorage.removeItem("editClientId");
                                    this.router.navigate(['login']);
                                    break;
                                case 403:     //
                                    window.localStorage.removeItem("token");
                                    window.localStorage.removeItem("editClientId");
                                    this.router.navigate(['login']);
                                    break;
                            }
                        }
                    });

        });
    }

    onSubmit() {
        this.addForm.get('IdCliente').setValue(this.clientId);
        this.apiService.createInsurance(this.addForm.value)
            .subscribe(data => {
                if (data.status === 200) {
                    alert('Poliza creada satisfactoriamente.');
                    this.router.navigate(['list-insurance'], { queryParams: { clientId: this.clientId } });
                } else {
                    // Error en la validación de la cobertura de la poliza mostrar mensaje al cliente
                    alert('El porcentaje de cubrimiento no puede ser superior al 50%');
                }
            });
    }

}
