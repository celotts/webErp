/**
 * Fecha de la Creación: 13/03/2018.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Module: menu.module.
 * Comentario:
 */
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ClarityModule} from "clarity-angular";
import {MensajeModule} from "../mensaje/mensaje.module";
import {MenuComponent} from "./menu.component";
import {MenuFormComponent} from "./menu-form.component";
import {MenuGridComponent} from "./menu-grid.component";
/** Importa un componente que declara y que luego exporta */

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule.forRoot(),
        MensajeModule
    ],// dependencias de otros módulos
    declarations: [
        MenuComponent,
        MenuFormComponent,
        MenuGridComponent
    ],// Componente que el módulo mismo declara
    exports: [
        MenuComponent,
        MenuFormComponent,
        MenuGridComponent
    ], // exporta los componentes importables desde otros módulos
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class MenuModule {
}

export class AppModule {
}