var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarBoxComponent } from './bar-box/bar-box.component';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { BarButtonComponent } from './bar-button/bar-button.component';
import { BarLogoComponent } from './bar-logo/bar-logo.component';
// import { BarLogoComponent } from './bar-logo/bar-logo.component';
// import { BarNavComponent } from './bar-nav/bar-nav.component';
// import { BarButtonComponent } from './bar-button/bar-button.component';
var BarModule = (function () {
    function BarModule() {
    }
    return BarModule;
}());
BarModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        exports: [BarBoxComponent, BarNavComponent, BarButtonComponent, BarLogoComponent],
        //declarations: [BarBoxComponent, BarLogoComponent, BarNavComponent, BarButtonComponent]
        declarations: [BarBoxComponent, BarNavComponent, BarButtonComponent, BarLogoComponent]
    })
], BarModule);
export { BarModule };
//# sourceMappingURL=bar.module.js.map