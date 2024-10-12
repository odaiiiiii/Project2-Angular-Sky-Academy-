import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPageComponent } from './vacation-page.component';

describe('VacationPageComponent', () => {
  let component: VacationPageComponent;
  let fixture: ComponentFixture<VacationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
