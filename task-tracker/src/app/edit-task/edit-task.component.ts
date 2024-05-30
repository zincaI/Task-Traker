import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Task } from '../task';
import { TaskService } from '../services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { Status } from '../status';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule,MatButtonModule,
    MatFormFieldModule,MatInputModule,
    MatDialogActions,MatDialogClose,
    MatSelectModule,
    MatDialogContent,
    HttpClientModule],
  providers: [TaskService],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent {
  statuses: string[] = Object.values(Status);
  constructor (
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    public taskService: TaskService
  ) { }

  save(): void { 
    this.taskService.editTask(this.data).subscribe(() => {
      console.log('Task edited successfully');});
    this.dialogRef.close(this.data);
  }
  cancel(): void {
    this.dialogRef.close();
  }
}