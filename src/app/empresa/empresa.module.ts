/**
 * Fecha de la Creación: 11/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Module: empresa.module.
 * Comentario:
 */
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ClarityModule} from "clarity-angular";
import {MensajeModule} from "../mensaje/mensaje.module";
import {EmpresaComponent} from "./empresa.component";
import {EmpresaComboComponent} from "./empresaCombo.componnt";
/** Importa un componente que declara y que luego exporta */

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule.forRoot(),
        MensajeModule
    ],// dependencias de otros módulos
    declarations: [
      EmpresaComponent,
      EmpresaComboComponent
    ],// Componente que el módulo mismo declara
    exports: [
      EmpresaComponent,
      EmpresaComboComponent
    ], // exporta los componentes importables desde otros módulos
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class EmpresaModule {
}

export class AppModule {
}
