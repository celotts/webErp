/**
 * Fecha de la Creación: 12/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: perfil-form.component.
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
import {PerfilService} from "./perfil.service";
import {MensajeService} from "../mensaje/mensaje.service";
import {State} from "clarity-angular";
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-perfil-form',
    templateUrl: './perfil-form/perfil-form.html',
    providers: [AppService, PerfilService, MensajeService]
})
export class PerfilFormComponent implements AfterViewInit {
    ngAfterViewInit() {
    }
    private saveLoading:boolean=false;
    private url: any= '' ;
    private state1:any;

    constructor(private aS: AppService,
                private mS: MensajeService,
                private pS: PerfilService,
                private aM: AppModel) {
        /**
         *
         *  Define url de la App
         */
        this. url=this.aM.getData[0].urlApi;
        this.pS.newReg();
    }
    refresh(state: State):void{

    }
    savePerfil():void{
        this.saveLoading=true;
        this.aM.getData[0].errApp='';
        if(this.aM.getData[0].Perfil[0].PerfilForm[0].nombre==''){
            this.aM.getData[0].alertas[0].msgError[0].mensaje='El campo nombre esta vacio... Operación cancelada';
            this.mS.MsgError();
            return
        }
        this.pS.save()
            .subscribe(
                data => {
                    /**
                     * Si el proceso se ejecuto correctamnet carga los datos
                     * @type {boolean}
                     */
                    this.saveLoading=false;
                    /**
                     * Carga mensaje Success
                     */
                    this.mS.success();
                    this.aM.getData[0].alertas[0].success[0].mensaje='Registro Guardado...';
                    if(this.aM.getData[0].Perfil[0].PerfilForm[0].id=='0'){
                        this.pS.newReg();
                    }
                    ///this.refresh(this.state1);
                    this.pS.cargarData();
                },
                err =>{
                    /**
                     * Si el proceso presento error asigna valor a la variable
                     * muestra el mensaje Error interno de la aplicación. Contactar al programador
                     * @type {boolean}
                     */
                    this.saveLoading=false;
                    this.aM.getData[0].alertas[0].msgError[0].mensaje=<any>err['name']+' Codigo: '+<any>err['status']+' Mensaje: '+err['statusText']+' Contactar al programador...';
                    console.log(<any>err);
                }
            );
    }
}