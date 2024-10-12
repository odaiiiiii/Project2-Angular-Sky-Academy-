import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-details-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employee-details-home.component.html',
  styleUrl: './employee-details-home.component.css'
})
export class EmployeeDetailsHomeComponent {
  
    name="odai Adawi";
    job="Web developer"
}
