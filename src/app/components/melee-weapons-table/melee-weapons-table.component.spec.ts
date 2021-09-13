import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeWeaponsTableComponent } from './melee-weapons-table.component';

describe('MeleeWeaponsTableComponent', () => {
  let component: MeleeWeaponsTableComponent;
  let fixture: ComponentFixture<MeleeWeaponsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeleeWeaponsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeWeaponsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
