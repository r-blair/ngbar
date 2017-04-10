import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-logo',
  templateUrl: './bar-logo.component.html',
   styleUrls: ['./bar-logo.component.css']
})
export class BarLogoComponent implements OnInit {
  logoContainerLayout = "row";
  logoContainerLayoutAlign = "center center";
  logoLayout = "row";
  logoLayoutAlign = "start center";
  logoFlex = "0 1 95%";
  constructor() { }

  ngOnInit() {
  }

}

