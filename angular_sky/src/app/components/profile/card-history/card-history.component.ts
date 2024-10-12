import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-history',
  standalone: true,
  imports: [],
  templateUrl: './card-history.component.html',
  styleUrls: ['./card-history.component.css'],
  providers: [DatePipe]
})
export class CardHistoryComponent {
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
