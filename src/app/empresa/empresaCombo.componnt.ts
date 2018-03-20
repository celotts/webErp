/**
 * Fecha de la Creación: 11/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: empresaCombo.componnt.
 * Comentario:
 */
import {AppService} from "../appService/appService";
import {Component, AfterViewInit} from "@angular/core";
import {AppModel} from "../appmodel/appModel";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/throw";
import {EmpresaService} from "./empresa.service";
import {MensajeService} from "../mensaje/mensaje.service";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-empresa-combo',
    templateUrl: './empresaCombo/empresaCombo.html',
    providers: [AppService, EmpresaService,MensajeService]
})
export class EmpresaComboComponent implements AfterViewInit {
    ngAfterViewInit() {
    }

    constructor(private aS: AppService,
                private eS: EmpresaService,
                private mS: MensajeService,
                private aM: AppModel) {

    }
    selecciona(value):void{
        for(var i in this.aM.getData[0].empresa[0].empresaCombo){
            if(this.aM.getData[0].empresa[0].empresaCombo[i].id==value){
                if(this.aM.getData[0].empresa[0].empresaCombo[i].nombre!='Empresa: [SELECCIONAR]') {
                    this.aM.getData[0].usuarioConect[0].idEmpresa=value;
                    this.aM.getData[0].usuarioConect[0].empresa = this.aM.getData[0].empresa[0].empresaCombo[i].nombre.substr(9, 90);
                    this.aM.getData[0].usuarioConect[0].rutEmpresa = this.aM.getData[0].empresa[0].empresaCombo[i].rut;
                }else{
                    this.aM.getData[0].usuarioConect[0].empresa = 'SIN SELECCIONAR';
                    this.aM.getData[0].usuarioConect[0].rutEmpresa = this.aM.getData[0].empresa[0].empresaCombo[i].rut;
                }
            }
        }
        this.aM.getData[0].usuarioConect[0].idEmpresa=value;

    }
}