import { Injectable } from '@angular/core';
import { Task } from '../task';
import { Status } from '../status';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  //baseUrl="https://tasksapi20240226164535.azurewebsites.net/api/Tasks";
  baseUrl = "http://localhost:5126/Task";
  
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  addTask(newTask: Task) {
    return this.httpClient.post<Task>(this.baseUrl, newTask, { headers: this.httpOptions.headers, responseType: 'text' as 'json' });
  }

  editTask(task: Task) {
    return this.httpClient.put<Task>(this.baseUrl, task);
  }
    

  deleteTask(task: Task) {
    return this.httpClient.delete<void>(`${this.baseUrl}/${task.id}`,{ headers: this.httpOptions.headers, responseType: 'text' as 'json' });
  }
    

}
