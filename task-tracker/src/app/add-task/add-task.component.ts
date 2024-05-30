import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Status } from '../status';
import { Task } from '../task';
import { NotificationService } from '../services/notification.service';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, RouterLink,MatButtonModule],
  providers: [TaskService],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  constructor(private taskService: TaskService, private router: Router, private notificationService: NotificationService) 
  {}
  taskName: string;
  taskDescription: string;
  
  onSubmit() {
    
    const newTask = <Task>{

      description: this.taskDescription,
      status: Status.ToDo,
      assignedTo: 'Me',
      title: this.taskName
    }

    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.notificationService.sendMessage("BroadcastMessage", [task])
        // Optionally, reset the form fields after submission
        //this.resetForm();
        this.router.navigate(['']);
      });


  }

}
