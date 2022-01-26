import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../models/bike/bike';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  myBikeURL: string = 'http://localhost:3000/bikes';

  constructor(private http: HttpClient) {}

  getAllBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.myBikeURL);
  }

  addBike(newBike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.myBikeURL, newBike);
  }
}
