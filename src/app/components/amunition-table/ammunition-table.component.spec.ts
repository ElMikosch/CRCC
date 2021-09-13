import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmmunitionTableComponent } from './ammunition-table.component';

describe('AmunitionTableComponent', () => {
  let component: AmmunitionTableComponent;
  let fixture: ComponentFixture<AmmunitionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmmunitionTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmunitionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
