import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPendingRequestsileComponent } from './card-pending-requestsile.component';

describe('CardPendingRequestsileComponent', () => {
  let component: CardPendingRequestsileComponent;
  let fixture: ComponentFixture<CardPendingRequestsileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPendingRequestsileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPendingRequestsileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
