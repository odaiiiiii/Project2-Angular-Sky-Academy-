import { Component } from '@angular/core';
import { VacationCardComponent } from '../../layout/vacation-card/vacation-card.component';
import { VacationCardComputerComponent } from '../vacation-card-computer/vacation-card-computer.component';

@Component({
  selector: 'app-vacation-page',
  standalone: true,
  imports: [VacationCardComponent,VacationCardComputerComponent],
  templateUrl: './vacation-page.component.html',
  styleUrl: './vacation-page.component.css'
})
export class VacationPageComponent {

}
