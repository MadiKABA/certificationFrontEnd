import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../authentification/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdministrationGuard implements CanActivate {
  constructor(private loginService:LoginService,private routerRedirect:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.isLoggedIn() && this.loginService.getUserRole()=='Administrateur'){
        return true;
      }
      this.routerRedirect.navigate(['login']);
      return false;
  }
  
}
