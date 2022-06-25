import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  @Output() sidebarOpen:any=false

  constructor() { }

  ngOnInit(): void {
  }

}
