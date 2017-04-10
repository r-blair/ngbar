import { Component, OnInit, OnDestroy } from '@angular/core';
import { MQService } from '../../_core/services/media-query.services';
import {Subscription} from 'rxjs/Subscription';
import { ASwitch, LayoutAlignSettings, LayoutSettings } from '../../_util/helpers/index';

@Component({
  selector: 'app-bar-box',
  templateUrl: './bar-box.component.html',
   styleUrls: ['./bar-box.component.css']
})
export class BarBoxComponent implements OnInit, OnDestroy {

  layout = new LayoutSettings;
  layoutAlign = new LayoutAlignSettings;
  here = "bar-box";
  exec: Subscription;
  switch = new ASwitch();
  buttonShow = true;
  boxContainerLayout = 'column';
  //this.layout.row;
  boxContainerLayoutAlign = 'space-between stretch';
  boxButtonLogoContainerLayout = 'row';
  boxButtonLogoContainerLayoutAlign = 'space-between center';
  boxButtonLogoContainerFlex = '80px';
  boxButtonFlex = '25';
  boxLogoFlex = '1 1 auto';
  //boxLogoFlexAlign = 'baseline';


  //this.layoutAlign.x.spaceBetween + this.layoutAlign.y.stretch;
  // boxLogoFlex
  // boxNavFlex
  // boxButtonFlex

  constructor(private mqs: MQService) {}

  ngOnInit() { this.exec = this.mqs.feed( x => console.log(x + this.here)); }
  ngOnDestroy() { this.exec.unsubscribe(); }
  toggle(){
    if (this.buttonShow){ this.switch.toggle() } else{};
      };

  initialState(mqAlias: string){
               // row | column | row-reverse | column-reverse

        switch(mqAlias){
          case 'xs':
            this.buttonShow = true;
            this.switch.state = 'inactive';

          break;
          case 'sm':
            this.buttonShow = true;
            this.switch.state = 'inactive';

          break;
          case 'md':
            this.buttonShow = false;
            this.switch.state = 'active';

          break;
          case 'lg':
            this.buttonShow = false;
            this.switch.state = 'active';

          break;
          case 'xl':
            this.buttonShow = false;
            this.switch.state = 'active';

          break;
          default:
            console.log(mqAlias);
              }
      }


}

