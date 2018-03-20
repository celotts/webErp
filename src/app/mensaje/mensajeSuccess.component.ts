/**
 * Fecha de la Creación: 17/01/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: mensajeSuccess.component.
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
import {MensajeService} from "./mensaje.service";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-mensaje-success',
    templateUrl: './mensajeSuccess/mensajeSuccess.html',
    providers: [AppService]
})
export class MensajeSuccessComponent implements AfterViewInit {
    ngAfterViewInit() {}

    constructor(private aS: AppService,
                private mS: MensajeService,
                private aM: AppModel) {
      this.aM.getData[0].alertas[0].success[0].ver=false;
      this.aM.getData[0].alertas[0].success[0].mensaje='';
    }
}
