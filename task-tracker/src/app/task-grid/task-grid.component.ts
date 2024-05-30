import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../task';
import { NgFor, NgIf } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { TaskService } from '../services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [NgFor, NgIf, TaskCardComponent, MatCardModule, MatIcon],
  providers: [TaskService],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})
export class TaskGridComponent implements OnInit{
  tasks1: Task[];

  constructor(private taskService: TaskService, private dialog: MatDialog, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks1 = tasks);
  }

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
}
