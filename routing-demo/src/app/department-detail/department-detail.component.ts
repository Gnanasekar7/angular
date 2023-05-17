import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-detail',
  template:`
  <div>
    <h3> you have selected department with id = {{departmentId}}</h3>
     <p>
       <button (click)=contact()>contact</button>
       <button (click)=overview()>overview</button>
     </p>
    <router-outlet></router-outlet> 
    <a (click)=goPrevious() >Previous</a>
    <a (click)=goNext()>Next</a>
    <div>
     <button (click)=gotoDepartment()>back</button>
     </div>
  </div>
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor (private route:ActivatedRoute, private router:Router){}
  public departmentId : any;

  ngOnInit (){
  //  let id =this.route.snapshot.paramMap.get('id')
  //  this.departmentId=id
  this.route.paramMap.subscribe((params:ParamMap)=>{
    let id=parseInt(<any>params.get("id"))
    this.departmentId=id
  })
  }
  goPrevious(){
   let previousId=this.departmentId - 1
  //  this.router.navigate(['/department',previousId])
  this.router.navigate(['../',previousId],{relativeTo:this.route})
  }
  goNext(){
    let nextId=this.departmentId + 1    
    this.router.navigate(['../',nextId],{relativeTo:this.route})
  }
  gotoDepartment(){
    let selectedId=this.departmentId ? this.departmentId :null
    // this.router.navigate(['/department',{id:selectedId}])
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
  }
  contact(){
    this.router.navigate(['contact'],{relativeTo:this.route}) 
  }
  overview(){
    this.router.navigate(['overview'],{relativeTo:this.route}) 
  }
}
