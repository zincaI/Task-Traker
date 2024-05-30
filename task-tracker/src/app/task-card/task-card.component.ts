import { Component } from '@angular/core';
import { Task } from '../task';
import { Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { NotificationService } from '../services/notification.service';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule,MatIcon],
  providers: [TaskService],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task;
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
  
}
