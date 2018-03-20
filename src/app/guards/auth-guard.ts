/**
 * Created by carlos on 26/12/2017.
 */
import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AppService} from "../appService/appService";
import {AppModel} from "../appmodel/appModel";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private router:Router,
              private aM:AppModel,
              private aS:AppService){}

  canActivate(): boolean{
    if(this.aS.validaToken()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
