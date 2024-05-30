import { Component, OnInit } from '@angular/core';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { Task } from '../task';
import { Status } from '../status';
import { TaskListComponent } from '../task-list/task-list.component';
import { MatIcon } from '@angular/material/icon'
import { NgIf } from '@angular/common';
import { NotificationService } from '../services/notification.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [TaskGridComponent, TaskListComponent, MatIcon,MatIconModule, NgIf],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})
export class TasksViewComponent implements OnInit{
  isList: boolean;
  notificationMessage: string;

  constructor(private notificationService: NotificationService){
  }
  ngOnInit(): void {
    this.notificationService.notificationSubject
    .subscribe
    ( hasNotifications => this.notificationMessage = hasNotifications ? "New notifications, please refresh the page" : "");
  }
}
