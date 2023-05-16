import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'employeelist',
  template: `
<div>
    <h2>Employee List</h2>
    <h1>{{errormsg}}</h1>
    <ul *ngFor = 'let emp of employee'>
     <li>{{emp.name}}</li>
    </ul>
</div>
  `,
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit  {
 
 public employee : any =[]
 public errormsg: any
 constructor (private _employeeservice:EmployeeserviceService){}

 ngOnInit () {
   this._employeeservice.getEmployees().subscribe(data=> this.employee=data,
                                                  error=>this.errormsg=error)
 }
}
