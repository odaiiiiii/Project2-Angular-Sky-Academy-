import { Component } from '@angular/core';
import { EmployeeDetailsProfileComponent } from '../employee-details-profile/employee-details-profile.component';
import { CardHistoryComponent } from '../card-history/card-history.component';
import { CardPendingRequestsileComponent } from '../card-pending-requestsile/card-pending-requestsile.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [RouterModule,EmployeeDetailsProfileComponent,CardHistoryComponent,CardPendingRequestsileComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}
