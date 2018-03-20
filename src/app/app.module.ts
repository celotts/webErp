import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ClarityModule} from "clarity-angular";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginModule} from "./login/login.module";
import {LoginService} from "./login/login.service";
import {AppModel} from "./appmodel/appModel";
import {AppService} from "./appService/appService";
import {MensajeModule} from "./mensaje/mensaje.module";
import {AuthGuard} from "./guards/auth-guard";
import {AuthHttp, AuthConfig} from "angular2-jwt";
import {RequestOptions, Http} from "@angular/http";
import {AgmCoreModule} from "@agm/core";
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";
import {EmpresaModule} from "./empresa/empresa.module";
import {PerfilModule} from "./perfil/perfil.module";
import {PerfilService} from "./perfil/perfil.service";
import {MenuModule} from "./menu/menu.module";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  //noinspection TypeScriptValidateTypes
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      libraries: ["places"],
      apiKey: 'AIzaSyBPYFXdRlebAO1ky2HsKKedN10mITA_JuU'
    }),
    AgmSnazzyInfoWindowModule,
    BrowserModule,
    HttpClientModule,
    ClarityModule.forRoot(),
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    MensajeModule,
    EmpresaModule,
    PerfilModule,
    MenuModule,
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AppModel,
    AppService,
    LoginService,
    AuthGuard,
    PerfilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
