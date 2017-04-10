import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-nav',
  templateUrl: './bar-nav.component.html',
   styleUrls: ['./bar-nav.component.css']
})
export class BarNavComponent implements OnInit {

navContainerLayout = "column";
navContainerLayoutAlign = "space-around center";
navItemContainerLayout = "row";
navItemContainerLayoutAlign = "center center"
navItemContainerFlex = "35px";
navItemFlex = "20px";
  constructor() { }

  ngOnInit() {
  }

}

