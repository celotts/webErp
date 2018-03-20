/**
 * Fecha de la Creación: 18/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: login-form-label.component.
 * Comentario:
 */
import {AppService} from "../appService/appService";
import {Component, AfterViewInit, OnInit} from "@angular/core";
import {AppModel} from "../appmodel/appModel";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/throw";
import {LoginService} from "./login.service";
import {MensajeService} from "../mensaje/mensaje.service";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-login-form-label',
    templateUrl: './login-label/login-form-label.html',
    styleUrls:['./login/login-form.css'],
    providers: [AppService, MensajeService]
})
export class LoginFormLabelComponent implements AfterViewInit, OnInit {
    ngAfterViewInit() {
    }
    ngOnInit(){
        this.buscaEmpresa();
    }

    /**
     * Carga Constructor
     */
    constructor(private lS: LoginService,
                private mS: MensajeService,
                private aM: AppModel) {

    }

    /**
     * Busca Empresa
     */
    buscaEmpresa():void{
        /**
         * Solicita al service la empresa
         */
        this.lS.buscarEmpresa()
            .subscribe(
                data => {
                    /**
                     * Solicitud sin error, carga datos en los array
                     * @type {any}
                     */
                    this.aM.getData[0].usuarioConect[0].idEmpresa=data['id'];
                    this.aM.getData[0].usuarioConect[0].empresa = data['nombre'];
                    this.aM.getData[0].usuarioConect[0].rutEmpresa = data['rut'];
                },
                error => {
                    /**
                     * Se presento un error interno, carga mensaje
                     * @type {string}
                     */
                    this.aM.getData[0].alertas[0].msgError[0].mensaje='Error interno de la aplicación. Contactar al programador';
                    this.mS.MsgError();
                    console.log(<any>error);
                }
            );
    }
}