/**
 * Fecha de la Creación: 11/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Service: empresa.service.
 * Comentario:
 */
import {Injectable} from "@angular/core";
import {AppService} from "../appService/appService";
import {AppModel} from "../appmodel/appModel";
import {Router} from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/throw";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class EmpresaService {
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
      
}
