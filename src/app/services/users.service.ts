import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }



  getOneUser(id: number) : Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  postUser(newUser : User) : Observable<User>{
    return this.http.post<User>(this.userUrl, newUser);
  }

  
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.userUrl)
  }
 

  // deleteUser(deleteID: number): Observable<any>{
  //   return this.http.delete<any>(`${this.userUrl}/${deleteID}`)
  // }

  // updateUser(editID: number, edittedInfo: User): Observable<User> {
  //   return this.http.put<User>(`${this.userUrl}/${editID}`, edittedInfo)
  // }
}









