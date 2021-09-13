import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangedWeaponsTableComponent } from './ranged-weapons-table.component';

describe('RangedWeaponsTableComponent', () => {
  let component: RangedWeaponsTableComponent;
  let fixture: ComponentFixture<RangedWeaponsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangedWeaponsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangedWeaponsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
