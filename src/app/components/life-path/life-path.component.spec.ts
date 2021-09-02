import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePathComponent } from './life-path.component';

describe('LifePathComponent', () => {
  let component: LifePathComponent;
  let fixture: ComponentFixture<LifePathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifePathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
