/**
 * Fecha de la Creación: 13/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Service: menu.service.
 * Comentario:
 */
import {Injectable} from "@angular/core";
import {AppService} from "../appService/appService";
import {AppModel} from "../appmodel/appModel";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/throw";
import {HttpParams, HttpClient} from "@angular/common/http";

@Injectable()

export class MenuService {
     /*
  * Declara la variable Url de la App
  */
    private url: any= '' ;

    constructor(private router: Router,
                private aM: AppModel,
                private http: HttpClient,
                private aS: AppService) {

        /**
     *
         Define url de la App
     */
        this. url=this.aM.getData[0].urlApi;
    }
    save():Observable<any>{
        /**
         * Asigna aplicacion al Menu
         */
        /**
         * Valida si el token esta activo
         * TRUE -> Token Activo
         * FALSE -> Token Expiro
         */
        if (!this.aS.validaToken()) {
            /**
             * Token Expiro
             */
            return;
        }

        const params = new HttpParams()
            .set('id', <any>this.aM.getData[0].Menu[0].MenuForm[0].id)
            .set('nombre', this.aM.getData[0].Menu[0].MenuForm[0].nombre)
            .set('controlador',<any>this.aM.getData[0].Menu[0].MenuForm[0].controlador)
            .set('icono',<any>this.aM.getData[0].Menu[0].MenuForm[0].icono)
            .set('tipoMenu',<any>this.aM.getData[0].Menu[0].MenuForm[0].tipoMenu)
            .set('idEmpresa',this.aM.getData[0].usuarioConect[0].idEmpresa)
            .set('user',<any>this.aM.getData[0].usuarioConect[0].email)
            .set('token', this.aM.getData[0].token);
        /**
         * RestFull->Busca registro auditoria
         */
        return this.http.post(this.url+'saveMenu',this.aS.getTokenApp(),{params});

    }
    newReg():void{
        this.aM.getData[0].Menu[0].MenuForm[0].id='0';
        this.aM.getData[0].Menu[0].MenuForm[0].nombre='';
        this.aM.getData[0].Menu[0].MenuForm[0].controlador='';
        this.aM.getData[0].Menu[0].MenuForm[0].tipoMenu='0';
        this.aM.getData[0].Menu[0].MenuForm[0].icono='';
        this.aM.getData[0].Menu[0].MenuForm[0].estado='0';
        this.aM.getData[0].Menu[0].MenuForm[0].tituloForm=this.aS.tituloFor('0');
    }
    cargarData(): Observable<any>{
        /**
         * Asigna aplicacion al Menu
         */
        /**
         * Valida si el token esta activo
         * TRUE -> Token Activo
         * FALSE -> Token Expiro
         */
        if (!this.aS.validaToken()) {
            /**
             * Token Expiro
             */
            return;
        }

        const params = new HttpParams()
            .set('pagina',this.aM.getData[0].Menu[0].MenuGrid[0].pagina)
            .set('cantItem', this.aM.getData[0].Menu[0].MenuGrid[0].cantRegitro)
            .set('nombre', this.aM.getData[0].Menu[0].MenuGrid[0].nombre)
            .set('controlador', this.aM.getData[0].Menu[0].MenuGrid[0].controlador)
            .set('icono', this.aM.getData[0].Menu[0].MenuGrid[0].icono)
            .set('idEmpresa',this.aM.getData[0].usuarioConect[0].idEmpresa)
            .set('user',<any>this.aM.getData[0].usuarioConect[0].email)
            .set('token', this.aM.getData[0].token);
        /**
         * RestFull->Busca registro auditoria
         */
        return this.http.post(this.url+'allMenu',this.aS.getTokenApp(),{params});
    }
    editReg(item):void{
        this.aM.getData[0].Menu[0].MenuForm[0].id=item.id;
        this.aM.getData[0].Menu[0].MenuForm[0].nombre=item.nombre;
        this.aM.getData[0].Menu[0].MenuForm[0].controlador=item.controlador;
        this.aM.getData[0].Menu[0].MenuForm[0].icono=item.icono;
        this.aM.getData[0].Menu[0].MenuForm[0].estado='0';
        this.aM.getData[0].Menu[0].MenuForm[0].tipoMenu=item.tipoMenu;
        this.aM.getData[0].Menu[0].MenuForm[0].tituloForm=this.aS.tituloFor(item.id);
    }
    delData():Observable<any>{
        /**
         * Asigna aplicacion al Menu
         */
        /**
         * Valida si el token esta activo
         * TRUE -> Token Activo
         * FALSE -> Token Expiro
         */
        if (!this.aS.validaToken()) {
            /**
             * Token Expiro
             */
            return;
        }

        const params = new HttpParams()
            .set('nombre', this.aM.getData[0].Menu[0].MenuForm[0].nombre)
            .set('id', <any>this.aM.getData[0].Menu[0].MenuForm[0].id)
            .set('idEmpresa',this.aM.getData[0].usuarioConect[0].idEmpresa)
            .set('user',<any>this.aM.getData[0].usuarioConect[0].email)
            .set('token', this.aM.getData[0].token);
        /**
         * RestFull->Busca registro auditoria
         */
        return this.http.post(this.url+'delMenu',this.aS.getTokenApp(),{params});
    }
}