/**
 * Fecha de la Creación: 12/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: perfil-grid.component.
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
import {State} from "clarity-angular";
import {MensajeService} from "../mensaje/mensaje.service";
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-perfil-grid',
    templateUrl: './perfil-grid/perfil-grid.html',
    providers: [AppService, PerfilService, MensajeService]
})
export class PerfilGridComponent implements AfterViewInit {
    ngAfterViewInit() {
    }
    private state1:any;
    private delloading:boolean=false;
    private saveLoading:boolean=false;
    private loading:boolean=false;
    private cant:number=0;
    constructor(private aS: AppService,
                private pS: PerfilService,
                private mS: MensajeService,
                private aM: AppModel) {

    }
    refresh(state: State):void{
        /**
         * Funcion para manejar la carga de datos del datagrid
         * @type {boolean}
         */
        this.state1=state;
        if(state.page) {
            /**
             * Valida l estado del data grid en la pagina
             * @type {any}
             */
            this.aM.getData[0].Perfil[0].PerfilGrid[0].cantRegitro= <any>state.page.size;
            this.aM.getData[0].Perfil[0].PerfilGrid[0].pagina= <any>state.page.from;
        }
        let filters:{[prop:string]: any[]} = {};
        this.aM.getData[0].Perfil[0].PerfilGrid[0].nombre='';
        /**
         * Valida si los campos de filtro de la opcion filtro tienen información
         */
        if (state.filters) {
            for (let filter of state.filters) {
                let {property, value} = <{property: string, value: string}>filter;
                filters[property] = [value];
                /**
                 * Asigna valor a los campos para efectuar el filtro
                 */
                if(property=='nombre' && value!=''){
                    this.aM.getData[0].Perfil[0].PerfilGrid[0].nombre=value;
                }else{
                    this.aM.getData[0].Perfil[0].PerfilGrid[0].nombre='';
                }

                this.aM.getData[0].Perfil[0].PerfilGrid[0].pagina = '0';
            }
        }else{
            /**
             * Limpia los campos cuando no se va a realizar consulta
             * @type {string}
             */
            this.aM.getData[0].Perfil[0].PerfilGrid[0].nombre='';
        }
        /**
         * Ejecuta la consulta
         */
        this.loading=true;
        /**
         * Carga los datos al data grid
         */
        this.cargaDataGrid();
    }

    cargaDataGrid():void{
        this.pS.cargarData()
            .subscribe(
                data => {
                    /**
                     * Si el proceso se ejecuto correctamnet carga los datos
                     * @type {boolean}
                     */
                    this.loading=false;
                    this.aM.getData[0].Perfil[0].PerfilData=data['data'];
                    this.aM.getData[0].Perfil[0].PerfilGrid[0].totRegistro=data['totRegistro'];
                },
                err =>{
                    /**
                     * Si el proceso presento error asigna valor a la variable
                     * muestra el mensaje Error interno de la aplicación. Contactar al programador
                     * @type {boolean}
                     */
                    this.loading=false;
                    this.aM.getData[0].errApp=<any>err['name']+' Codigo: '+<any>err['status']+' Mensaje: '+err['statusText']+' Contactar al programador...';
                    console.log(<any>err);
                }
            );
        /**
         * Valida si la cantidad de veces, si es menor a 1 apaga la variable
         * loading
         */
        if(this.cant<1){
            this.loading=false;
        }
        this.cant+=1;
    }
    newReg():void{
        this.pS.newReg();
        this.aM.getData[0].Perfil[0].PerfilForm[0].modalForm=true;
    }
    selecciona(item):void{

    }
    editReg(item):void{
        this.pS.editReg(item);
        this.aM.getData[0].Perfil[0].PerfilForm[0].modalForm=true;
    }
    saveForm():void{
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
                    this.refresh(this.state1);
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
    cerrarModalForm():void{
        this.aM.getData[0].Perfil[0].PerfilForm[0].modalForm=false;
    }
    delReg(item): void{
        this.aM.getData[0].Perfil[0].PerfilForm[0].modalDelete=true;
    }
    eliminarDatosPerfil():void{
        this.delloading=true;
        this.aM.getData[0].errApp='';
        if(this.aM.getData[0].Perfil[0].PerfilForm[0].nombre==''){
            this.aM.getData[0].alertas[0].msgError[0].mensaje='El campo nombre esta vacio... Operación cancelada';
            this.mS.MsgError();
            return
        }
        this.pS.delData()
            .subscribe(
                data => {
                    /**
                     * Si el proceso se ejecuto correctamnet carga los datos
                     * @type {boolean}
                     */
                    this.delloading=false;
                    /**
                     * Carga mensaje Success
                     */

                    this.aM.getData[0].alertas[0].success[0].mensaje='Regisro Eliminado Satisfactorimente...'
                    this.mS.success();
                    this.refresh(this.state1);
                },
                err =>{
                    /**
                     * Si el proceso presento error asigna valor a la variable
                     * muestra el mensaje Error interno de la aplicación. Contactar al programador
                     * @type {boolean}
                     */
                    this.delloading=false;
                    this.aM.getData[0].alertas[0].msgError[0].mensaje=<any>err['name']+' Codigo: '+<any>err['status']+' Mensaje: '+err['statusText']+' Contactar al programador...';
                    this.mS.MsgError();
                    console.log(<any>err);
                }
            );
    }
    cerrarDel():void{
        this.aM.getData[0].Perfil[0].PerfilForm[0].modalDelete=false;
    }
}