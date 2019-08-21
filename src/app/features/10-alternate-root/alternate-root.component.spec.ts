import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateRootComponent } from './alternate-root.component';

describe('AlternateRootComponent', () => {
  let component: AlternateRootComponent;
  let fixture: ComponentFixture<AlternateRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
