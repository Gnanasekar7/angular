import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',

  template: `<div>
  <h2>{{name}}</h2>
  <h2>{{2+2}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>

  <h2 class='text-succes'>Generation X</h2>

  <button (click)="onClick($event)">ClickMe</button> 
  <h2>{{text}}</h2> 

  <input #myinput type='text'/><button (click)='logMessage(myinput.value)'>log</button>
  <br/>
  <input [(ngModel)]=twoway type='text'/>{{twoway}}
  
  <div *ngIf='displayname; then thenBlock ;else elseBlock'></div>
    <ng-template #thenBlock>
      <h2>Gnana</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Sekar</h2>
    </ng-template>

  <div [ngSwitch]='color'>
      <div *ngSwitchCase="'red'">you picked red </div>
      <div *ngSwitchCase="'blue'">you picked blue</div>
      <div *ngSwitchCase="'green'">you picked green</div>
  </div>
  <div *ngFor= "let color of colors">
    <h2>{{color}}</h2>
  </div>

<h2>{{"welcome "+ parentData + " from child component"}}</h2>

<button (click)="firstEvent()">Send Event</button>
<div>
<h2>{{morning | uppercase}}</h2>
<h2>{{morning | titlecase}}</h2>
<h2>{{morning | titlecase | slice:4:7}}</h2>

<h2>{{5.678 | number:'1.2-3'}}</h2>
<h2>{{5.678 | number:'2.1-2'}}</h2>
<h2>{{5.678 | number:'3.4-5'}}</h2>

</div>
  </div>
  `
  ,
  
  styles: [`
  .text-succes {
   color: green;
  }
  .text-special:italics;
  `]
})
export class TestComponent {
   public name="Gnana sekar"
   public isSpecial=true
   public text=''
   public twoway=''
   //ng if directive
   public displayname=true
   //ng switch
   public color='red'
   //ng for
   public colors=['red','yellow','blue','green']

   greetUser(){
    return "hello " + this.name
   }
   //event binding
   onClick(e: any){
    console.log(e)
    this.text='clicked'
   }
   //template variable
   logMessage(value: any){
    console.log(value)
   }
   // recieving data from child componenet
   @Input() public parentData:any;
   // sending data from child to parent componenet
   @Output() public childEvent= new EventEmitter()
   firstEvent(){
    this.childEvent.emit('from child component')
   }
   //pipes
   public morning="good morning"
}
