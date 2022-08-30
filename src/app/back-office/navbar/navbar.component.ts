import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/authentification/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //Pour gerer le togle de navbar
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean= false;
  isLoggedIn:any;
  // user:any;

  constructor(public loginService:LoginService,private routerRedirect:Router) { }

  ngOnInit(): void {
    this.isLoggedIn=this.loginService.isLoggedIn();
    this.loginService.getUser();
    
  }
  navbarTogle(){
    this.menuStatus=!this.menuStatus
    this.sideNavToggled.emit(this.menuStatus);
  }

  deconnexion(){
    this.loginService.logout();
    // this.user=null
    this.routerRedirect.navigate(['/']);
  }

}
