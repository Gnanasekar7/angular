import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-department-detail',
  template:`
  <div>
    <h3> you have selected department with id = {{departmentId}}</h3>
  </div>
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor (private route:ActivatedRoute){}
  public departmentId : any;

  ngOnInit (){
   let id =this.route.snapshot.paramMap.get('id')
   this.departmentId=id
  }
}
