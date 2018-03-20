/**
 * Fecha de la Creación: 13/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: menu-grid.component.
 * Comentario:
 */
import {Component, AfterViewInit} from "@angular/core";
import {AppModel} from "../appmodel/appModel";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/throw";
import {MenuService} from "./menu.service";
import {MensajeService} from "../mensaje/mensaje.service";
import {State} from "clarity-angular";
import {AppService} from "../appService/appService";
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-menu-grid',
    templateUrl: './menu-grid/menu-grid.html',
    providers: [AppService, MenuService, MensajeService]
})
export class MenuGridComponent implements AfterViewInit {
    ngAfterViewInit() {
    }
    private state1:any;
    private delloading:boolean=false;
    private saveLoading:boolean=false;
    private loading:boolean=false;
    private cant:number=0;
    constructor(private aS: AppService,
                private meS: MenuService,
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
            this.aM.getData[0].Menu[0].MenuGrid[0].cantRegitro= <any>state.page.size;
            this.aM.getData[0].Menu[0].MenuGrid[0].pagina= <any>state.page.from;
        }
        let filters:{[prop:string]: any[]} = {};
        this.aM.getData[0].Menu[0].MenuGrid[0].nombre='';
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
                    this.aM.getData[0].Menu[0].MenuGrid[0].nombre=value;
                }else{
                    this.aM.getData[0].Menu[0].MenuGrid[0].nombre='';
                }
                if(property=='controlador' && value!=''){
                    this.aM.getData[0].Menu[0].MenuGrid[0].controlador=value;
                }else{
                    this.aM.getData[0].Menu[0].MenuGrid[0].controlador='';
                }
                if(property=='icono' && value!=''){
                    this.aM.getData[0].Menu[0].MenuGrid[0].icono=value;
                }else{
                    this.aM.getData[0].Menu[0].MenuGrid[0].icono='';
                }

                this.aM.getData[0].Menu[0].MenuGrid[0].pagina = '0';
            }
        }else{
            /**
             * Limpia los campos cuando no se va a realizar consulta
             * @type {string}
             */
            this.aM.getData[0].Menu[0].MenuGrid[0].nombre='';
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
        this.meS.cargarData()
            .subscribe(
                data => {
                    /**
                     * Si el proceso se ejecuto correctamnet carga los datos
                     * @type {boolean}
                     */
                    this.loading=false;
                    this.aM.getData[0].Menu[0].MenuData=data['data'];
                    this.aM.getData[0].Menu[0].MenuGrid[0].totRegistro=data['totRegistro'];
                },
                err =>{
                    /**
                     * Si el proceso presento error asigna valor a la variable
                     * muestra el mensaje Error interno de la aplicación. Contactar al programador
                     * @type {boolean}
                     */
                    this.loading=false;
                    this.aM.getData[0].alertas[0].msgError[0].mensaje=<any>err['name']+' Codigo: '+<any>err['status']+' Mensaje: '+err['statusText']+' Contactar al programador...';
                    this.mS.MsgError();
                    //this.aM.getData[0].errApp=<any>err['name']+' Codigo: '+<any>err['status']+' Mensaje: '+err['statusText']+' Contactar al programador...';
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
        this.meS.newReg();
        this.aM.getData[0].Menu[0].MenuForm[0].modalForm=true;
    }
    selecciona(item):void{
        this.meS.editReg(item);
    }
    editReg(item):void{
        this.meS.editReg(item);
        this.aM.getData[0].Menu[0].MenuForm[0].modalForm=true;
    }
    saveForm():void{
        this.saveLoading=true;
        this.aM.getData[0].errApp='';
        if(this.aM.getData[0].Menu[0].MenuForm[0].nombre==''){
            this.aM.getData[0].alertas[0].msgError[0].mensaje='El campo nombre esta vacio... Operación cancelada';
            this.mS.MsgError();
            return
        }
        this.meS.save()
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
                    if(this.aM.getData[0].Menu[0].MenuForm[0].id=='0'){
                        this.meS.newReg();
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
        this.aM.getData[0].Menu[0].MenuForm[0].modalForm=false;
    }
    delReg(item): void{
        this.aM.getData[0].Menu[0].MenuForm[0].modalDelete=true;
    }
    eliminarDatosMenu():void{
        this.delloading=true;
        this.aM.getData[0].errApp='';
        if(this.aM.getData[0].Menu[0].MenuForm[0].nombre==''){
            this.aM.getData[0].alertas[0].msgError[0].mensaje='El campo nombre esta vacio... Operación cancelada';
            this.mS.MsgError();
            return
        }
        this.meS.delData()
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
        this.aM.getData[0].Menu[0].MenuForm[0].modalDelete=false;
    }
}
