import { Component, OnInit, OnDestroy } from '@angular/core';
import { MQService } from '../../_core/services/media-query.services';
import {Subscription} from 'rxjs/Subscription';

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
  exec: Subscription;
  constructor(private mqs: MQService) {}

  ngOnInit() { this.exec = this.mqs.feed( x => this.initialState(x)); }
  ngOnDestroy() { this.exec.unsubscribe(); }

  initialState(mqAlias: string){

        switch(mqAlias){
          case 'xs':
            console.log(mqAlias);
            this.logoContainerLayout = "row";
            this.logoContainerLayoutAlign = "center center";
            this.logoLayout = "row";
            this.logoLayoutAlign = "start center";
            this.logoFlex = "0 1 95%";
          break;
          case 'sm':
            console.log(mqAlias);
            this.logoContainerLayout = "row";
            this.logoContainerLayoutAlign = "center center";
            this.logoLayout = "row";
            this.logoLayoutAlign = "start center";
            this.logoFlex = "0 1 95%";

          break;
          case 'md':
            console.log(mqAlias);
            this.logoContainerLayout = "row";
            this.logoContainerLayoutAlign = "center center";
            this.logoLayout = "row";
            this.logoLayoutAlign = "start center";
            this.logoFlex = "0 1 95%";

          break;
          case 'lg':
            console.log(mqAlias);
            this.logoContainerLayout = "row";
            this.logoContainerLayoutAlign = "center center";
            this.logoLayout = "row";
            this.logoLayoutAlign = "start center";
            this.logoFlex = "0 1 95%";

          break;
          case 'xl':
            console.log(mqAlias);
            this.logoContainerLayout = "row";
            this.logoContainerLayoutAlign = "center center";
            this.logoLayout = "row";
            this.logoLayoutAlign = "start center";
            this.logoFlex = "0 1 95%";

          break;
          default:
            console.log(mqAlias);
              }
      }

}

