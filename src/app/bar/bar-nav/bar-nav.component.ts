import { Component, OnInit, OnDestroy } from '@angular/core';
import { MQService } from '../../_core/services/media-query.services';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-bar-nav',
  templateUrl: './bar-nav.component.html',
   styleUrls: ['./bar-nav.component.css']
})
export class BarNavComponent implements OnInit {

// navContainerLayout = "column";
// navContainerLayoutAlign = "space-around center";

navItemContainerLayout = "row";
navItemContainerLayoutAlign = "center center";
navItemContainerFlex = "35px";

navItemFlex = "auto";

navList = ["nav1", "nav2", "nav3", "nav4"];


    exec: Subscription;


  constructor(private mqs: MQService) {}

  ngOnInit() { this.exec = this.mqs.feed( x => this.initialState(x)); }
  ngOnDestroy() { this.exec.unsubscribe(); }


  initialState(mqAlias: string){

        switch(mqAlias){
          case 'xs':
            console.log(mqAlias);
            // this.navContainerLayout = "column";
            // this.navContainerLayoutAlign = "space-around center";
            this.navItemContainerLayout = "row";
            this.navItemContainerLayoutAlign = "center center";
            this.navItemContainerFlex = "35px";
            this.navItemFlex = "auto";
          break;
          case 'sm':
            console.log(mqAlias);
            // this.navContainerLayout = "column";
            // this.navContainerLayoutAlign = "space-around center";
            this.navItemContainerLayout = "row";
            this.navItemContainerLayoutAlign = "center center";
            this.navItemContainerFlex = "35px";
            this.navItemFlex = "auto";

          break;
          case 'md':
            console.log(mqAlias);
            // this.navContainerLayout = "row";
            // this.navContainerLayoutAlign = "center center";
            this.navItemContainerLayout = "row";
            this.navItemContainerLayoutAlign = "center center";
            this.navItemContainerFlex = "0 1 125px";
            this.navItemFlex = "1 1 auto";

          break;
          case 'lg':
            console.log(mqAlias);
            // this.navContainerLayout = "row";
            // this.navContainerLayoutAlign = "center center";
            this.navItemContainerLayout = "row";
            this.navItemContainerLayoutAlign = "center center";
            this.navItemContainerFlex = "0 1 200px";
            this.navItemFlex = "1 1 auto";

          break;
          case 'xl':
            console.log(mqAlias);
            // this.navContainerLayout = "row";
            // this.navContainerLayoutAlign = "center center";
            this.navItemContainerLayout = "row";
            this.navItemContainerLayoutAlign = "center center";
            this.navItemContainerFlex = "0 1 200px";
            this.navItemFlex = "1 1 auto";

          break;
          default:
            console.log(mqAlias);
              }
      }

}

