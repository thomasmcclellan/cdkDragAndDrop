import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenGridComponent } from './green-grid.component';

describe('GreenGridComponent', () => {
  let component: GreenGridComponent;
  let fixture: ComponentFixture<GreenGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
