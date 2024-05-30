import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../task';
import { NgFor } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { MatIcon } from '@angular/material/icon';
import { TaskService } from '../services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, FilterComponent, MatIcon],
  providers: [TaskService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{
  tasks: Task[];
  filteredTasks: Task[];

  constructor(private taskService: TaskService, private dialog: MatDialog, private notificationService: NotificationService) 
  {}
  
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((result) => 
      {this.notificationService.sendMessage("BroadcastMessage", [task]);
      console.log("Deleted")});
  }
  
  editTask(task: Task): void {
    console.log("editing task: " + task.title);
    const dialogRef = this.dialog.open(EditTaskComponent, { data: task});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.taskService.editTask(task).subscribe((result) => 
        {this.notificationService.sendMessage("BroadcastMessage", [task]);
        console.log("Edited")});
    });
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.filteredTasks = this.tasks;
  }

  handleStatusSelected(status) {
    this.filteredTasks = this.tasks.filter((task) => task.status === status);
 }
 
}
