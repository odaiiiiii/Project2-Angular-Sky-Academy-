import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../../../Models/info';
import { InfoService } from '../../../Services/info.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-vacation-card',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],

templateUrl: './vacation-card.component.html',
  styleUrls: ['./vacation-card.component.css']
}) 
export class VacationCardComponent implements OnInit {
  infos: Info[] = [];
  @Input() limit: number | undefined;
  searchTerm : string = ""

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.infoService.getInfo().subscribe((x) => {
      this.infos = x;
    });
  }

  getDisplayedInfos() {
    if (this.limit) {
      return this.infos.slice(0, this.limit);
    }
    return this.infos;
  }

  getFilteredInfos() {
    return this.getDisplayedInfos().filter(info => 
      info.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
