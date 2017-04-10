var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ObservableMedia, RESPONSIVE_ALIASES } from '@angular/flex-layout';
import 'rxjs/add/operator/multicast';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var MQService = (function () {
    function MQService(media) {
        this.media = media;
        var filtered = RESPONSIVE_ALIASES.filter(function (x) { return x.length == 2; });
        var current;
        for (var i = 0; i <= filtered.length; ++i) {
            if (media.isActive(filtered[i])) {
                current = filtered[i];
            }
            else { }
            ;
        }
        this.bSub = new BehaviorSubject(current);
        this.updater = media.asObservable().map(function (x) { return x.mqAlias; }).filter(function (x) { return filtered.includes(x); }).multicast(this.bSub).refCount();
    }
    MQService.prototype.feed = function (obs) {
        return this.updater.subscribe(obs);
    };
    return MQService;
}());
MQService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ObservableMedia])
], MQService);
export { MQService };
//# sourceMappingURL=media-query.services.js.map