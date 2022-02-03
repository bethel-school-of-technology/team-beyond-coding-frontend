import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../models/bike/bike';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  myBikeURL: string = 'http://localhost:3000/bikes';

  public refreshBikes$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  getAllBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.myBikeURL);
  }
  getOneBike(reqID: number): Observable<Bike> {
    return this.http.get<Bike>(`${this.myBikeURL}/${reqID}`);
  }
  addBike(newBike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.myBikeURL, newBike);
  }
  deleteBike(deleteID: number): Observable<any> {
    return this.http.delete<any>(`${this.myBikeURL}/${deleteID}`);
  }
  updateBike(editID: number, edittedInfo: Bike): Observable<Bike> {
    return this.http.put<Bike>(`${this.myBikeURL}/${editID}`, edittedInfo);
  }
}
