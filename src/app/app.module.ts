import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule.forRoot(),
    FontAwesomeModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule {  }
