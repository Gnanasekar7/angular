import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
