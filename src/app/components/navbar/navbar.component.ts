import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //Pour gerer le togle de navbar
  @Output() sideNavToggled=new EventEmitter<boolean>();
  sidebarOpen:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }
  navbarTogle(){
    this.sideNavToggled.emit(this.sidebarOpen);
  }

}
