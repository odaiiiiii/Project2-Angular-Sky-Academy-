import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-pending-requestsile',
  standalone: true,
  imports: [],
  templateUrl: './card-pending-requestsile.component.html',
  styleUrl: './card-pending-requestsile.component.css',
  providers: [DatePipe]

})
export class CardPendingRequestsileComponent {
  title = "Annual Vacation";
  startDate = new Date("2023-03-02");
  endDate = new Date("2023-03-10"); 
  days = "8 days";
  empName = "Odai Azmi";
  constructor(private datePipe: DatePipe) {}

  get formattedStartDate(): string {
    return this.datePipe.transform(this.startDate, 'MM/dd/yyyy') || '';
  }

  get formattedEndDate(): string {
    return this.datePipe.transform(this.endDate, 'MM/dd/yyyy') || '';
  }

  get formattedDateRange(): string {
    return `${this.formattedStartDate} - ${this.formattedEndDate}`;
  }
}
 