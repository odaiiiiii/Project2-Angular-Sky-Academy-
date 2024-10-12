import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../../../Models/info';
import { InfoService } from '../../../Services/info.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vacation-card-computer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './vacation-card-computer.component.html',
  styleUrl: './vacation-card-computer.component.css'
})
export class VacationCardComputerComponent implements OnInit {
  infos: Info[] = [];
  @Input() limit: number = 13;  
  searchTerm: string = '';
  selectAll: boolean = false;

  currentPage: number = 1; 
  totalPages: number = 0;    

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.infoService.getInfo().subscribe((x) => {
      this.infos = x;
      this.totalPages = Math.ceil(this.infos.length / this.limit);  
      console.log(this.infos);
    });
  }

  getFilteredInfos() {
    const startIndex = (this.currentPage - 1) * this.limit;
    const endIndex = startIndex + this.limit;

    return this.infos
      .filter(info =>
        info.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  isNextDisabled(): boolean {
    return this.currentPage === this.totalPages;
  }

  isPrevDisabled(): boolean {
    return this.currentPage === 1;
  }

  toggleSelectAll() {
    this.infos.forEach(info => {
      info.checked = this.selectAll;
    });
  }
}
