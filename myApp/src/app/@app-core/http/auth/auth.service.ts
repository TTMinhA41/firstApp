import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}
  public login(req:any){
    return this.http.post(`https://goha-server.up.railway.app/api/customer/auth/login`,req, {responseType: 'text' }).pipe(
      map((result)=>{
        return result;
      }),
      catchError((err)=>{
        throw err.error;
      })
    );
  }
}
