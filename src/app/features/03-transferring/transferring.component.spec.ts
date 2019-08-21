import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferringComponent } from './transferring.component';

describe('TransferringComponent', () => {
  let component: TransferringComponent;
  let fixture: ComponentFixture<TransferringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
