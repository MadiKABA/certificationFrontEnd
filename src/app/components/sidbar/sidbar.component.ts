import { Component, Input, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/authentification/login.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  @Input() sideNavStatus:boolean=false

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

}
