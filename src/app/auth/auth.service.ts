/**
 * Created by carlos on 24/12/2017.
 */
import {Injectable} from "@angular/core";
@Injectable()
export class AuthService {
  getToken(): string {
    return localStorage.getItem('token');
  }
  isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    //noinspection TypeScriptUnresolvedFunction
    //return tokenNotExpired(null, token);
    return false;
  }
}
