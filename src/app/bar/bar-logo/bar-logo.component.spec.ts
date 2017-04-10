import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLogoComponent } from './bar-logo.component';

describe('BarLogoComponent', () => {
  let component: BarLogoComponent;
  let fixture: ComponentFixture<BarLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
