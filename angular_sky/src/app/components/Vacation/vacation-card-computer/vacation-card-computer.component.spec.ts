import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationCardComputerComponent } from './vacation-card-computer.component';

describe('VacationCardComputerComponent', () => {
  let component: VacationCardComputerComponent;
  let fixture: ComponentFixture<VacationCardComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationCardComputerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationCardComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
