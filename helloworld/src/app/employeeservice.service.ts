import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable,throwError } from 'rxjs';
// import 'rxjs/add/operator/catch'
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  
  private _url: string='assets/data/employee.json'
  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || 'server Error');
  }
}
