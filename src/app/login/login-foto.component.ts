/**
 * Fecha de la Creación: 24/12/2017.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: login-foto.component.
 * Comentario:
 */
import {AppService} from "../appService/appService";
import {Component, AfterViewInit, Inject} from "@angular/core";
import {AppModel} from "../appmodel/appModel";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-login-foto',
    templateUrl: './login-foto/login-foto.html',
    providers: [AppService]
})
export class LoginFotoComponent implements AfterViewInit {
    ngAfterViewInit() {}
    constructor(@Inject(AppService) private aS: AppService,
                @Inject(AppModel) private appModel: AppModel) {

    }
}
