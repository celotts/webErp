/**
 * Fecha de la Creación: 24/12/2017.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: login-form.component.
 * Comentario:
 */
import {AppService} from "../appService/appService";
import {Component, AfterViewInit, EventEmitter, Output, OnInit} from "@angular/core";
import {AppModel} from "../appmodel/appModel";
import {LoginService} from "./login.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import {MensajeService} from "../mensaje/mensaje.service";

declare var $: any;
declare var CryptoJS:any;

@Component({
    moduleId: module.id,
    selector: 'my-login-form',
    templateUrl: './login-form/login-form.html',
    styleUrls:['./login/login-form.css'],
    providers: [AppService, LoginService, MensajeService]
})
export class LoginFormComponent implements AfterViewInit, OnInit {
    /**
     * Carga variable de salida para el loadin de la foto
     * @type {EventEmitter<boolean>}
     */
    @Output() onLoad = new EventEmitter<boolean>();
    /**
     * Carga la salida para validar si el usuario esta vacio
     * @type {EventEmitter<boolean>}
     */
    @Output() onUser = new EventEmitter<boolean>();
    /**
     * Carga la salida para validar si la clave esta vacio
     * @type {EventEmitter<boolean>}
     */
    @Output() onPassword = new EventEmitter<boolean>();

    /**
     * Funcion ngAfterViewInit
     */
    ngAfterViewInit() {}

    /**
     * Funcion ngOnInit
     */
    ngOnInit(){

    }
    /**
     * Declara variables
     * @type {number}
     */
    private users:any='';
    private clave:string='';
    private inderror:number=0;

    /**
     * Contructor del componente
     */
    constructor(private lS:LoginService,
                private mS:MensajeService,
                private aM: AppModel) {}

    /**
     * Valida el Password si esta vacio
     */
    getPassword():void{
        if(this.clave=='' || this.clave==null || this.clave==undefined){
            // Vacio asigna true a la variable outPut
            this.onPassword.emit(true);
        }else{
            // Vacio asigna false a la variable outPut
            this.onPassword.emit(false);
        }
    }

    /**
     * Busca Foto
     */
    buscaFoto():void{
        /**
         * Valida si el campo usuario es vacio
         */
        if(this.users=='' || this.users==null || this.users==undefined){
            /**
             * Retorna true a la variabe output
             */
            this.onUser.emit(true);
            return;
        }
        let rutaFoto=this.aM.getData[0].RutaImgUser[0].imagen;
        /**
         * Activa loadin
         */
        this.onLoad.emit(true);
        /**
         * Inidca que el campo user no esta vacio
         */
        this.onUser.emit(false);
        this.inderror=0;
        /**
         * asigna el valor de user a la variable array email
         * @type {any}
         */
        //noinspection TypeScriptUnresolvedFunction
        this.aM.getData[0].usuarioConect[0].email=this.users;
        /**
         * Solicita el service buscar la foto
         */
        this.lS.buscarFoto(this.users)
            .subscribe(
                data => {
                    /**
                     * Oculta el loeading de la foto
                     */
                    this.onLoad.emit(false);
                    /**
                     * Si no hay errar llena el array foto
                     * llena array combobox emprsa
                     * @type {number}
                     */
                    this.aM.getData[0].usuarioConect[0].foto=rutaFoto+data['foto'];
                    this.aM.getData[0].empresa[0].empresaCombo=data['empresa'];
                },
                error => {
                    /**
                     * Cuando hay un error interno con RestApi carga error
                     */
                    this.onLoad.emit(false);
                    this.aM.getData[0].alertas[0].msgError[0].mensaje='Error interno de la aplicación. Contactar al programador';
                    this.mS.MsgError();
                    console.log(<any>error);
                }
            );
    }
}
