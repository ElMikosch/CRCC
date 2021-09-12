import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyYourStuffComponent } from './buy-your-stuff.component';

describe('BuyYourStuffComponent', () => {
  let component: BuyYourStuffComponent;
  let fixture: ComponentFixture<BuyYourStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyYourStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyYourStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
