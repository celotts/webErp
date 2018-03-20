/**
 * Fecha de la Creación: 09/11/2017.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Module: mensaje.module.
 * Comentario:
 */
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MensajeErrorComponent} from "./mensajeError.component";
import {MensajeOkComponent} from "./mensajeOk.component";
import {ClarityModule} from "clarity-angular";
import {MensajeSuccessComponent} from "./mensajeSuccess.component";
/** Importa un componente que declara y que luego exporta */

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule.forRoot(),
    ],// dependencias de otros módulos
    declarations: [
      MensajeErrorComponent,
      MensajeOkComponent,
      MensajeSuccessComponent
    ],// Componente que el módulo mismo declara
    exports: [
      MensajeErrorComponent,
      MensajeOkComponent,
      MensajeSuccessComponent
    ], // exporta los componentes importables desde otros módulos
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class MensajeModule {
}

export class AppModule {
}
