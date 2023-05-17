import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute ,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template:  `
  <div>
    <ul *ngFor="let dep of departments">
      <li (click)="onSelect(dep)"  [class.selected]="isSelected(dep)" >{{dep.id}} . {{dep.name}}</li>
    </ul>
  </div>
  `
  ,
  styles:[ `
  .selected {
    background-color: yellow;
    font-weight: bold;
  }
  `]
})
export class DepartmentListComponent implements OnInit{
    //  <li (click)="onSelect(dep)"  [class.selected]="isSelected(dep)" >{{dep.id}} . {{dep.name}}</li>
  public selectedId:any
   public departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"React"},
    {"id":3,"name":"Python"}
   ]
   constructor (private route:ActivatedRoute, private router:Router){}

   ngOnInit (){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(<any>params.get("id"))
      this.selectedId=id
    })
    }

   onSelect(department: any){
    //  this.router.navigate(['/department',department.id])
  //relative routing(facilitate to chamge url at app-routing module alone)
   this.router.navigate([department.id],{relativeTo:this.route})
   }

   isSelected(department: any){
    return department.id === this.selectedId
   }
}
