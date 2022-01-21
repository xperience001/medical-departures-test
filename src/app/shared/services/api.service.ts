import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }


  getTodo(todoId: number):Observable<any> {
    let url = environment.url+todoId
    return this.http.get(url)
  }

 getMultipleTodos(id1: number, id2:number, id3: number): Observable<any[]>{
  let call1= this.http.get(environment.url+id1)

  let call2=this.http.get(environment.url+id2)

  let call3=this.http.get(environment.url+id3)

  return forkJoin([call1, call2,call3]);
}

}
