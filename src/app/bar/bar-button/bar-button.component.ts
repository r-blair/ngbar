import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-button',
  templateUrl: './bar-button.component.html',
   styleUrls: ['./bar-button.component.css']
})
export class BarButtonComponent implements OnInit {
  buttonContainerLayout = "row";
  buttonContainerLayoutAlign = "center center";
  buttonLayout = "column";
  buttonLayoutAlign = "center center";
  buttonFlex = "0 1 64px";
  constructor() { }

  ngOnInit() {
  }

}

