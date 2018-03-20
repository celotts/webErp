/**
 * Fecha de la Creación: 09/11/2017.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Service: mensaje.service.
 * Comentario:
 */
import {Inject} from "@angular/core";
import {AppModel} from "../appmodel/appModel";
import {Router} from "@angular/router";
import {AppService} from "../appService/appService";

export class MensajeService {

  constructor(@Inject(AppService) private aS: AppService,
              @Inject(Router) private router: Router,
              @Inject(AppModel) private aM: AppModel) {
    this.aM.getData[0].alertas[0].success[0].ver=false;
  }
  MsgOk():void{
    this.aM.getData[0].alertas[0].msgOk[0].ver=true;
    let interval = setInterval(() => {
      //noinspection TypeScriptUnresolvedFunction
      clearInterval(interval);
      this.aM.getData[0].alertas[0].msgOk[0].ver=false;
      this.aM.getData[0].alertas[0].msgOk[0].mensaje='';
    }, 4500);
  }
  MsgError():void{
    this.aM.getData[0].alertas[0].msgError[0].ver=true;
    let interval = setInterval(() => {
      //noinspection TypeScriptUnresolvedFunction
      clearInterval(interval);
      this.aM.getData[0].alertas[0].msgError[0].ver=false;
      this.aM.getData[0].alertas[0].msgError[0].mensaje='';
    }, 4500);
  }

  success(): void{
    this.aM.getData[0].alertas[0].success[0].ver=true;
    let interval = setInterval(() => {
      //noinspection TypeScriptUnresolvedFunction
      clearInterval(interval);
      this.aM.getData[0].alertas[0].success[0].ver=false;
      this.aM.getData[0].alertas[0].success[0].mensaje='';
    }, 2900);
  }
}
