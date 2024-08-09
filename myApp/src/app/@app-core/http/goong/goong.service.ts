import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoongService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  public goong(api:any, name:any){
    return this.http.get(`https://rsapi.goong.io/Place/AutoComplete?api_key=${api}&location=21.013715429594125,%20105.79829597455202&input=${name}`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
				return error;
			})
    )
  }
  public goongCurrentPostion(api:any, lat:any, lng: any){
    return this.http.get(`https://rsapi.goong.io/Geocode?latlng=${lat},${lng}&api_key=${api}`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
				return error;
			})
    )
  }
}
