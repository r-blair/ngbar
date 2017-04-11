# ngbar

## What this is:

A bar that sits atop your webapp and conforms to google's material standards. Built with Angular.

## What it's built with:

* [Angular](https://angular.io/)
* [@angular/flex-layout](https://github.com/angular/flex-layout)
* [@angular/material2](https://material.angular.io/)
* [RxJs](http://reactivex.io/rxjs/)
* [Bootstrap 4](https://v4-alpha.getbootstrap.com/getting-started/introduction/)

## Its features:

* Fully responsive, has [@angular/flex-layout](https://github.com/angular/flex-layout/wiki/API-Documentation) built into every component.
* Easy to theme as every component is linked to a single point that implements google's [material color palette](https://material.io/color/#!/).
* Easy to brand as all branding-points are sourced to a file outside of the implementation. (Yet to be implemented!)

## Noteworthy implementation details:

* [BehaviorSubject](http://reactivex.io/rxjs/class/es6/BehaviorSubject.js~BehaviorSubject.html) service provided at the root component level that broadcasts the current activated mediaquery to components as they're created. Using [Angular lifehooks](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html) the component will configure its view accordingly and unsubscribe on destruction to avoid memory-leaks.

* Bootstrap 4 recompiled to sync with the [window breakpoints spectrum](https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints) given by Google's Material design.

## Work to be done:

**Lots.**

Implementing navigation links with a router and moving the route paths outside of the implementation for one.
