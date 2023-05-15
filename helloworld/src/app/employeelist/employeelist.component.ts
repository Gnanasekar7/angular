import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'employeelist',
  template: `
<div>
    <h2>Employee List</h2>
    <ul *ngFor = 'let emp of employee'>
     <li>{{emp.name}}</li>
    </ul>
</div>
  `,
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit  {
 public employee : any =[]
 constructor (private _employeeservice:EmployeeserviceService){}
 ngOnInit () {
   this.employee=this._employeeservice.getEmployees()
 }
}
