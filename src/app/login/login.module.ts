/**
 * Fecha de la Creación: 24/12/2017.
 * Usuario PC: carlos.
 * Autor de la App: Ing. Msc. Carlos Lott.
 * Desarrollado por la compañia: FC QUALITY C.A.
 * Module: login.module.
 * Comentario:
 */
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ClarityModule} from "clarity-angular";
import {MensajeModule} from "../mensaje/mensaje.module";
import {LoginComponent} from "./login.component";
import {LoginFormComponent} from "./login-form.component";
import {LoginFotoComponent} from "./login-foto.component";
import {LoginFormLabelComponent} from "./login-form-label.component";
/** Importa un componente que declara y que luego exporta */

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule.forRoot(),
        MensajeModule

    ],// dependencias de otros módulos
    declarations: [
        LoginComponent,
        LoginFormComponent,
        LoginFotoComponent,
        LoginFormLabelComponent

    ],// Componente que el módulo mismo declara
    exports: [
        LoginComponent,
        LoginFormComponent,
        LoginFotoComponent,
        LoginFormLabelComponent

    ], // exporta los componentes importables desde otros módulos
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class LoginModule {
}

export class AppModule {
}
