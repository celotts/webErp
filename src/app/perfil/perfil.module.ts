/**
 * Fecha de la Creación: 12/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Module: perfil.module.
 * Comentario:
 */
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ClarityModule} from "clarity-angular";
import {MensajeModule} from "../mensaje/mensaje.module";
import {PerfilComponent} from "./perfil.component";
import {PerfilFormComponent} from "./perfil-form.component";
import {PerfilGridComponent} from "./perfil-grid.component";
/** Importa un componente que declara y que luego exporta */

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule.forRoot(),
        MensajeModule
    ],// dependencias de otros módulos
    declarations: [
        PerfilComponent,
        PerfilFormComponent,
        PerfilGridComponent
    ],// Componente que el módulo mismo declara
    exports: [
        PerfilComponent,
        PerfilFormComponent,
        PerfilGridComponent
    ], // exporta los componentes importables desde otros módulos
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PerfilModule {
}

export class AppModule {
}