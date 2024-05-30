import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from '../status';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit{
  statuses: Status[];
  @Output() statusSelected: EventEmitter<Status> = new EventEmitter();
  
  ngOnInit(): void {
    this.statuses = Object.values(Status);
  }

  selectStatus(status: Status) {
    console.log(status);
    this.statusSelected.emit(status);
  }
}
