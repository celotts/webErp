import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppService} from "./appService/appService";
import {AppModel} from "./appmodel/appModel";
import {LoginService} from "./login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService],
  host: {
    "[class.is-collapsed]": "collapsed",
    "[class.has-nav-groups]": "hasNavGroups",
    "[class.has-icons]": "hasIcons"
  }
})
export class AppComponent implements OnInit{

  constructor(private http:HttpClient,
              private aS:AppService,
              private lS:LoginService,
              private router:Router,
              private appModel:AppModel){

  }
  ngOnInit(){
    if(localStorage.getItem('token')){
      console.log(sessionStorage.getItem('token'));
      this.cerrarSesion();
      this.appModel.getData[0].session='Off';
    }
  }
  public basic: boolean = false;

  private expanded:boolean=true;
  private nombre:any;
  private nomApp:any='MODULOS';
  private index1:number=0;
  private index2:number=0;
  private menuNivel1:any=[];
  private menuNivel2:any=[];
  logOut():void{

  }
  cambiaIndex(i2, item): boolean {// Combobox
    console.log(this.menuNivel1 = this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu);
    console.log(this.menuNivel1);
    this.nomApp = item.nombre;
    this.appModel.getData[0].usuarioConect[0].ModuloSeleccionado=item.nombre;
    this.index1 = i2;
    /**
     * opcMenu
     */
    if (this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu == 'undefined' ||
      this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu == null
    ) {
      this.menuNivel1 = [];
      this.menuNivel2 = [];
      this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu = [];
    } else {
      this.menuNivel1 = this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu;//opcMenu
    }
    /**
     * menuHijo
     */
    if (this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu[this.index2] == undefined ||
      this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu[this.index2] == null) {
      this.menuNivel2 = [];
      this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu = [];
    } else {
      this.menuNivel2 = this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu[this.index2].menuHijo;//Menuhijo
    }
    //
    return false;
  }

  cambiaIndex2(i2): void { // Menu principal
    this.index2 = i2;
    /**
     * menuHijo
     */
    if (this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu[this.index2] == undefined ||
      this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu[this.index2] == null) {
      this.menuNivel2 = [];
      this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu[this.index2].menuHijo = [];
    } else {
      this.menuNivel2 = this.appModel.getData[0].usuarioConect[0].modulos[this.index1].opcMenu[this.index2].menuHijo;//Menuhijo
    }

  }
  cerrarSesion():void{
    this.appModel.getData[0].session='On';
    this.basic=false;
    this.appModel.getData[0].usuarioConect[0].seccionActiva=0;
    this.lS.logOut();
    this.reinicia();
  }
  reinicia():void{
    window.location.href = this.appModel.getData[0].urlApp;
  }

  callOpc(item): void{
    /**
     * Funcion para cargar el route de las opciones del menu
     * Antes de ejecutar la opcion seleccionada valida el
     * estado del token
     *
     * Si el Token es TRUE -> Activo (Puede Navegar)
     * Si el Token es FALSE -> Expiro (No Puede Navegar)
     *
     */
    if(this.aS.validaToken()){
      // El estado del token es TRUE -> token Activo
      this.lS.navegar(item.controlador);
    }
  }
}
