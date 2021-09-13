import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberwareTableComponent } from './cyberware-table.component';

describe('CyberwareTableComponent', () => {
  let component: CyberwareTableComponent;
  let fixture: ComponentFixture<CyberwareTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberwareTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberwareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
