import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavComponent } from './bar-nav.component';

describe('BarNavComponent', () => {
  let component: BarNavComponent;
  let fixture: ComponentFixture<BarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
