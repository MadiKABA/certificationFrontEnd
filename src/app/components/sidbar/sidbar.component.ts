import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  @Input() sideNavStatus:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

}
