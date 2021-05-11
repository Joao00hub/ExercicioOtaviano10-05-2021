import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carros } from '../models/carros';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  url = 'http://localhost:3000/carros';
  constructor(private httpClient: HttpClient) { }

  ListarCarros(): Observable<Carros[]> {
    return this.httpClient.get<Carros[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))   
  }

  handleError(handleError: any): import("rxjs").OperatorFunction<Carros[], any> {
    throw new Error('Method not implemented.');
  }
}
