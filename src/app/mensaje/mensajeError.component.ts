/**
 * Fecha de la Creación: 09/11/2017.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Componente: mensajeError.component.
 * Comentario:
 */
import {Component, AfterViewInit, Inject} from "@angular/core";
import {AppModel} from "../appmodel/appModel";
import {MensajeService} from "./mensaje.service";
import {AppService} from "../appService/appService";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-mensaje-error',
    templateUrl: 'mensajeError/mensajeError.html',
    providers: [AppService, MensajeService]
})
export class MensajeErrorComponent implements AfterViewInit {
  ngAfterViewInit() {}

  constructor(@Inject(AppService) private aS: AppService,
              @Inject(MensajeService) private mS:MensajeService,
              @Inject(AppModel) private aM: AppModel) {
      this.aM.getData[0].alertas[0].msgError[0].ver=false;
      this.aM.getData[0].alertas[0].msgError[0].mensaje='';
  }

}
