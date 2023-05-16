import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template:  `
  <div>
    <ul *ngFor="let dep of departments">
      <li (click)="onSelect(dep)">{{dep.id}} . {{dep.name}}</li>
    </ul>
  </div>
  `
  ,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
   public departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"React"},
    {"id":3,"name":"Python"}
   ]
   constructor (private route:Router){}
   onSelect(department: any){
     this.route.navigate(['/department',department.id])
   }
}
