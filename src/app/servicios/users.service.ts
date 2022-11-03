import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { user } from '../modelos/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 apiUrl:string= 'http://localhost:3001/';

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<user>{
    return this.http.get<user>(this.apiUrl);
  }


  guardar(data:any):Observable<user>{
    return this.http.get<user>(this.apiUrl+'/newColaborador');
  }


}
