import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {

  title: string;
  cancelBtnName: string;
  saveBtnName: string;
  list: any;
  option = [{ key: 'pending', value: 'Pending' }, { key: 'inprogress', value: 'In Progress' },
  { key: 'complete', value: 'Complete' }];
  public onSave = new Subject();

  constructor(public modalRef: BsModalRef) { }


  saveDetails() {
    this.onSave.next(this.list);
    this.modalRef.hide();
  }

}
