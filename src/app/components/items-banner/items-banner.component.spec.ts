import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBannerComponent } from './items-banner.component';

describe('ItemsBannerComponent', () => {
  let component: ItemsBannerComponent;
  let fixture: ComponentFixture<ItemsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
