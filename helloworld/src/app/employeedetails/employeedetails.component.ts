import { Component ,OnInit} from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
@Component({
  selector: 'employeedetails',
  template: `
<div>
    <h2>Employee Details</h2>
    <h1>{{errormsg}}</h1>
    <ul *ngFor = 'let emp of employee'>
     <li>{{emp.id}} . {{emp.name}} - {{emp.age}}</li>
    </ul>
</div>
  `,
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  public employee : any =[]
  public errormsg: any
  constructor (private _employeeservice:EmployeeserviceService){}
  
  ngOnInit () {
    this._employeeservice.getEmployees().subscribe(data=> this.employee=data,
                                                   error=>this.errormsg=error)
  }
 }