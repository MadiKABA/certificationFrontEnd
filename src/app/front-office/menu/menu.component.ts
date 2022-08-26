import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/authentification/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  

  constructor(public loginService:LoginService,private routerRedirect:Router) { }

  ngOnInit(): void {
  }

  deconnexion(){
    this.loginService.logout();
    // this.user=null
    this.routerRedirect.navigate(['/login']);
  }
}
