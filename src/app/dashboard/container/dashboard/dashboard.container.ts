import { Component, OnInit, OnChanges } from '@angular/core';
import { TaskService } from '../../store/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss']
})
export class DashboardComponent implements OnInit {
  taskList;
  errorMessage;

  constructor(private taskSerivce: TaskService) { }

  ngOnInit(): void {
    this.taskSerivce.onGet().subscribe(
      data => this.taskList = data,
      error => this.errorMessage = error);
  }

}
