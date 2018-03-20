/**
 * Fecha de la Creación: 24/12/2017.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Service: login.service.
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
import {HttpParams, HttpClient} from "@angular/common/http";

interface imgSearch {
  foto: string;

}
@Injectable()
export class LoginService {
  private url:any='';
  constructor(private router: Router,
              private aM:AppModel,
              private http:HttpClient,
              private aS: AppService) {
    /*
    Define url de la App
     */
    this.url=this.aM.getData[0].urlApi;
  }

  /**
   * Busca la empresa
   * @returns {Observable<Object>}
   */
  buscarEmpresa(): Observable<any>{
    let body='';
    //let params = new HttpParams().set('usuario', datos);
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
    return this.http.post(this.url+'BuscaEmpresa',body,{});
  }

  /**
   * Busca foto
   * @param datos
   * @returns {Observable<Object>}
   */
  buscarFoto(datos): Observable<any>{
    let body='';
    /**
     * Paramtros a enviar
     * @type {HttpParams}
     */
    let params = new HttpParams().set('usuario', datos);
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
    return this.http.post(this.url+'imagen',body,{params});
  }

  /**
   * Loguea a la aplicacion
   * @param users
   * @param clave
   * @returns {Observable<Object>}
   */
  loguear(users:string,clave:string): Observable<any>{
    let body='';
    /**
     * Parametros a enviar
     * @type {HttpParams}
     */
    const params = new HttpParams()
      .set('email', users)
      .set('idEmpresa',this.aM.getData[0].usuarioConect[0].idEmpresa)
      .set('password', clave);
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
    return this.http.post(this.url+'login',body,{params});
  }

  /**
   * Cierra la sesion
   */
  logOut():void{
    this.aS.logOut();
  }

  /**
   * Carga Variable de sesion.
   * @param data Lott
   */
  cargaVariableSesion(data):void{
    this.aS.cargaVariableSesion(data);
  }

  /**
   * Opcion para navegar.
   * @param item
   */
  navegar(item):void{
    /**
     * Valida el estdo del token
     * TRUE -> Token Activo (Puede Navegar)
     * FALSE -> Token Expiro (No Puede Navegar)
     */
    if(this.aS.validaToken()){
      this.router.navigate([item]);
    }
  }
}
