import { Component } from '@angular/core';
import { LoginService } from './services/authentification/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn=false;
  title = 'certificationFrontEnd';
  sideNavStatus:boolean=false;

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.loginService.isLoggedIn();
  }

}
