import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'certificationFrontEnd';

  sidebarOpen=true
  navbartoler(){
    this.sidebarOpen=!this.sidebarOpen
  }

}
