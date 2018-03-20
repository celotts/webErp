/**
 * Fecha de la Creación: 13/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: menu-form.component.
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
import {MenuService} from "./menu.service";
import {MensajeService} from "../mensaje/mensaje.service";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-menu-form',
    templateUrl: './menu-form/menu-form.html',
    providers: [AppService, MenuService, MensajeService]
})
export class MenuFormComponent implements AfterViewInit {
    ngAfterViewInit() {
    }

    constructor(private aS: AppService,
                private mS: MensajeService,
                private meS: MenuService,
                private aM: AppModel) {

    }
}