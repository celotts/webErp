/**
 * Fecha de la Creación: 24/12/2017.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Service: appService.service.
 * Comentario:
 */
import {Inject} from "@angular/core";
import {AppModel} from "../appmodel/appModel";
import {Router} from "@angular/router";
import {tokenNotExpired} from "angular2-jwt";
import {Headers, RequestOptions} from "@angular/http";

export class AppService {
  constructor(@Inject(Router) private router: Router,
              @Inject(AppModel) private aM: AppModel) {

  }

  validaToken(){
    /**
     * Inicializa la variable msgExpire en False
     * Esta variable activa el mensaje de que la
     * sesion Expiro.
     * Donde:
     *  --> TRUE  muestra el modal expiro la sesion
     *  --> FALSE oculta el modal  Sesion Activa
     * @type {boolean}
     */
    this.aM.getData[0].msgExpire=false;
    /*
    * Valida el estadodel Token
    * true -> Token Activo
    * False -> Token Expiro
     */
    if(!tokenNotExpired()){
      /**
       * La Respuesta es false Token Expiro...!
       * Muestra el modal donde informa que la sesion expiro
       * y se sale del service, y re-inicia la app.
       * @type {boolean}
       */

      localStorage.removeItem('token');
      this.limpiaVariableSesion();
      this.aM.getData[0].msgExpire=true;
      return;
    }
    /**
     * La respuesta es true --> Token Activo
     * Devuelve TRUE para que se ejecute el proceso
     */
    return tokenNotExpired();
  }


  getTokenApp():any{
    /**
     * Obtiene el token de la app
     * Crea el Header de la app
     * @type {Headers}
     */
    let auth= new Headers(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + this.aM.getData[0].token
      }
    );
    let options= new RequestOptions({headers:auth});
    return options;
  }

  logOut():void{
    localStorage.removeItem('token');
    this.limpiaVariableSesion();
    this.router.navigate(['']);
  }

  restaFechas (f1,f2): number{
    var aFecha1 = f1.split('/');
    var aFecha2 = f2.split('/');
    var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
    var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
    var dif = fFecha2 - fFecha1;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    return dias;
  }

  limpiaVariableSesion():void{
    this.aM.getData[0].usuarioConect[0].id=0;
    this.aM.getData[0].usuarioConect[0].nombre='';
    this.aM.getData[0].usuarioConect[0].foto='../assets/img/user/sinfoto.png';
    this.aM.getData[0].usuarioConect[0].email='';
    this.aM.getData[0].usuarioConect[0].preguntaSecreta='';
    this.aM.getData[0].usuarioConect[0].fechaUltBloqueo='';
    this.aM.getData[0].usuarioConect[0].fechaUltSuspencio='';
    this.aM.getData[0].usuarioConect[0].fechaUltBaja='';
    this.aM.getData[0].usuarioConect[0].ModuloSeleccionado='';
    localStorage.setItem('token', '');
  }

  cargaVariableSesion(data):void{
    let array=data['data'][0];
    //
    this.aM.getData[0].usuarioConect[0].id=array.id;
    this.aM.getData[0].usuarioConect[0].panel=true;
    this.aM.getData[0].usuarioConect[0].modulos=array.modulos;
    this.aM.getData[0].usuarioConect[0].nombre=array.nombre;
    this.aM.getData[0].usuarioConect[0].nivel=array.nivel;
    this.aM.getData[0].usuarioConect[0].email=array.email;
    this.aM.getData[0].usuarioConect[0].estado=array.estado;
    this.aM.getData[0].usuarioConect[0].new=array.new;
    this.aM.getData[0].usuarioConect[0].edit=array.edit;
    this.aM.getData[0].usuarioConect[0].del=array.del;
    this.aM.getData[0].usuarioConect[0].preguntaSecreta=array.preguntaSeguridad;
    this.aM.getData[0].usuarioConect[0].fechaUltBloqueo=array.fechaUltBloqueo;
    this.aM.getData[0].usuarioConect[0].fechaUltSuspencio=array.fechaUltSuspencio;
    this.aM.getData[0].usuarioConect[0].fechaUltBaja=array.fechaUltBaja;
    this.aM.getData[0].usuarioConect[0].fecha=array.fecha;
    this.aM.getData[0].usuarioConect[0].fechaYMD=array.fechaYMD;
    this.aM.getData[0].usuarioConect[0].ModuloSeleccionado='';
    this.aM.getData[0].usuarioConect[0].seccionActiva=1;
    console.log(this.aM.getData[0].usuarioConect[0])
  }
  tituloFor(ind:any):string{
    if(ind=='0'){
      return ' (NUEVO) ';
    }
    return ' (EDITAR) ';
  }

  navegar(item): void{
    this.router.navigate([item]);
  }
  convierteNumBoo(item): boolean{
    if(item==1){
      return true
    }
    return false;
  }
  convierteBooNum(item): number{
    if(item){
      return 1
    }
    return 0;
  }
  buscaNacionalidad(item):any{
    /**
     * Busca Nacionalidad con el nombre
     * retorna id
     */
    for (var i=0 ; i < <any>this.aM.getData[0].nacionalidad[0].data.length ; i++)
    {

      if (this.aM.getData[0].nacionalidad[0].data[i]['nombre'] == item) {
        return this.aM.getData[0].nacionalidad[0].data[i]['id'];
      }
    }
    return 0;
  }
}
