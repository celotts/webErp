/**
 * Fecha de la Creación: 24/12/2017.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: login.component.
 * Comentario:
 */
import {Component, AfterViewInit, OnInit} from "@angular/core";
import {AppModel} from "../appmodel/appModel";
import {AppService} from "../appService/appService";
import {LoginService} from "./login.service";
import {MensajeService} from "../mensaje/mensaje.service";

declare var $: any;
declare var CryptoJS:any;

@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: './login/login.html',
    styleUrls:['./login/login-form.css'],
    providers: [AppService, LoginService, MensajeService]
})
export class LoginComponent implements AfterViewInit, OnInit {
    /**
     * Funcion sin uso
     */
    ngAfterViewInit() {}

    /**
     * NgOnInit asigna false a la variable ver para ocultar loadin de la foto
     */
    ngOnInit(){
        this.ver=false;
    }

    /**
     * Define variable de sistema
     * @type {boolean}
     */
    private revUser: boolean=false;
    private revPass: boolean=false;
    private ver:boolean=false;
    private users:any='';
    private clave:string='';

    /**
     * Crea el constructor
     * @param lS
     * @param mS
     * @param aM
     */
    constructor(private lS: LoginService,
                private mS: MensajeService,
                private aM: AppModel) {}

    /**
     * Valida los campos
     */
    validar():void{

        /**
         * Si el campo user esta vacio
         */
        if(this.revUser){
            this.aM.getData[0].alertas[0].msgError[0].mensaje='El campo usuario no puede estar vacio... Operación cancelada';
            this.mS.MsgError();
            return;
        }
        /**
         * Si el campo password esta vacio
         */
        if(this.revPass){
            this.aM.getData[0].alertas[0].msgError[0].mensaje='El campo clave no puede estar vacio... Operación cancelada';
            this.mS.MsgError();
            return;
        }
        /**
         * Si ambos campos no esta vacio procede a loguear
         */
        this.loguear();
    }

    /**
     * Funcion para loguear a la aplicacion
     */
    loguear():void{
        /**
         * Limpia el Token del Local Storage del pc o dispositivo
         */
        localStorage.removeItem('token');
        /**
         * Manda el valor de la clave encriptada en MD5 al service
         */
        this.lS.loguear(this.users,CryptoJS.MD5(this.clave))
            .subscribe(
                data => {
                    /**
                     * Si no hay error carga el array
                     */
                    if(data['success']){
                        /**
                         * Asigna el valor del token al Local Storage del  pc o disponisitvo
                         */
                        localStorage.setItem('token', data['token']);
                        /**
                         * Asigna variable
                         * @type {any}
                         */
                        this.aM.getData[0].token=data['token'];
                        this.lS.cargaVariableSesion(data);
                    }else{
                        /**
                         * Si la conexion no fue satisfactoria emite mensaje
                         * @type {string}
                         */
                        this.aM.getData[0].token='';
                        this.aM.getData[0].alertas[0].msgError[0].mensaje=data['mensaje'];
                        this.mS.MsgError();
                    }
                },
                error => {
                    /**
                     * Se presento error interno
                     * @type {string}
                     */
                    this.aM.getData[0].alertas[0].msgError[0].mensaje='Error interno. Contactar al programador';
                    this.mS.MsgError();
                    console.log(<any>error);
                }
            );
    }

    /**
     * Valida la visibilidad del loading
     * True Visible | False Oculto
     * @type {boolean}
     */
    onLoad(ver: boolean) {
        this.ver = ver;
    }

    /**
     * Valida si un mensaje de error referente al campo usuario
     * * True Visible | False Oculto
     * @param ver
     */
    onUser(ver: boolean) {
        this.revUser = ver;
    }

    /**
     * Valida si un mensaje de error referente al campo clave
     * * True Visible | False Oculto
     * @param ver
     */
    onPassword(ver: boolean) {
        this.revPass = ver;
    }
}
