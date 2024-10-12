import { Component } from '@angular/core';
import { EmployeeDetailsHomeComponent } from '../employee-details-home/employee-details-home.component';
import { GreenBoxComponent } from '../greenBox-home/green-box/green-box.component';
import { SliderHomeComponent } from '../sliders/slider-home/slider-home.component';
import { VacationCardComponent } from '../../layout/vacation-card/vacation-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [EmployeeDetailsHomeComponent,GreenBoxComponent,SliderHomeComponent,VacationCardComponent,RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
name="odai";
}
