/**
 * Fecha de la Creación: 13/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: menu.component.
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
    selector: 'my-menu',
    templateUrl: './menu/menu.html',
    providers: [AppService]
})
export class MenuComponent implements AfterViewInit {
    ngAfterViewInit() {
    }

    constructor(private aS: AppService,
                private aM: AppModel) {

    }
}