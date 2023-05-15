import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"dee","age":30},
      {"id":3,"name":"mike","age":30}
     ]
  }
}
