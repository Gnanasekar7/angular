import { Component ,OnInit} from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
@Component({
  selector: 'employeedetails',
  template: `
<div>
    <h2>Employee Details</h2>
    <ul *ngFor = 'let emp of employee'>
     <li>{{emp.id}} . {{emp.name}} - {{emp.age}}</li>
    </ul>
</div>
  `,
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  public employee : any =[]
  constructor (private _employeeservice:EmployeeserviceService){}
  ngOnInit () {
    this.employee=this._employeeservice.getEmployees()
  }
 }