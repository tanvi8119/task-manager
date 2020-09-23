import { CommonModule } from '@angular/common';
import { TaskManagerComponent } from './component/task-manager/task-manager.component';
import { DashboardComponent } from './container/dashboard/dashboard.container';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddEditComponent } from './component/add-edit/add-edit.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [TaskManagerComponent, DashboardComponent, AddEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [AddEditComponent]
})
export class DashboardModule {
  static routes = routes;

  static forRoot(): ModuleWithProviders<DashboardModule> {
    return {
      ngModule: DashboardModule,
      providers: []
    };
  }
}
