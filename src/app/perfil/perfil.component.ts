/**
 * Fecha de la Creación: 12/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: perfil.component.
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

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-perfil',
    templateUrl: './perfil/perfil.html',
    providers: [AppService]
})
export class PerfilComponent implements AfterViewInit {
    ngAfterViewInit() {
    }

    constructor(private aS: AppService,
                private aM: AppModel) {

    }
}