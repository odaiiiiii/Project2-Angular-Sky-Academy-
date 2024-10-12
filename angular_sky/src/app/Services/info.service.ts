import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Info } from '../Models/info';

@Injectable({                       // عشان احدد ان هذه الخدمة يمكن استخدامها في كل مكان بالمشروع
  providedIn: 'root'
})
export class InfoService {
  private urlApi = "http://localhost:3000/employeeInformation";
  constructor(private httpClient:HttpClient) { }

  // Get All
  getInfo():Observable<Info[]>{                         // [] ==> لاني رح ارجع قائمة من العناصر
    return this.httpClient.get<Info[]>(this.urlApi)

  }

} 
