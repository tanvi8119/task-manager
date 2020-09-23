import { Component, Input, OnChanges } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnChanges {
  @Input() taskList: any[];
  subscription: Subscription;
  constructor(public modalService: BsModalService) {
    this.subscription = new Subscription();
  }
  taskList1: any[];
  taskList2: any[];
  taskList3: any[];

  ngOnChanges(): void {
    if (this.taskList) {
      this.taskList1 = this.taskList.filter(tk => tk.state === 'pending');
      this.taskList2 = this.taskList.filter(tk => tk.state === 'inprogress');
      this.taskList3 = this.taskList.filter(tk => tk.state === 'complete');
    }
  }

  addTask() {
    const initialState = {
      list: [{
        name: '',
        description: '',
        state: '',
        description2: ''
      }
      ],
      title: 'ADD/EDIT TASK',
      saveBtnName: 'Save',
      cancelBtnName: 'Cancel'
    };
    const editTaskModal = this.modalService.show(AddEditComponent, { initialState });
    const editTaskModalContent = editTaskModal.content;
    this.subscription.add(editTaskModalContent.onSave.subscribe(data => {
      this.saveTask(data);
    }));
  }

  editTask(name) {
    const val = this.taskList.filter(t => t.name === name);
    const initialState = {
      list: val[0],
      title: 'ADD/EDIT TASK',
      saveBtnName: 'Save',
      cancelBtnName: 'Cancel'
    };
    const editTaskModal = this.modalService.show(AddEditComponent, { initialState });
    const editTaskModalContent = editTaskModal.content;
    this.subscription.add(editTaskModalContent.onSave.subscribe(data => {
      this.saveTask(data);
    }));
  }

  saveTask(task) {
    if (task.state === 'pending') {
      this.taskList1.concat(task);
    } else if (task.state === 'inprogress') {
      this.taskList2.concat(task);
    } else {
      this.taskList3.concat(task);
    }
  }


  deleteTask(task) {
    if (task.state === 'pending') {
      this.taskList1 = this.taskList1.filter(t => t.name != task.name);
    } else {
      this.taskList2 = this.taskList2.filter(t => t.name != task.name);
    }
  }

}
