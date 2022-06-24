import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDealComponent } from './slide-deal.component';

describe('SlideDealComponent', () => {
  let component: SlideDealComponent;
  let fixture: ComponentFixture<SlideDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideDealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
