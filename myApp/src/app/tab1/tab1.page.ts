import { Component, input } from '@angular/core';
import { GoongService } from '../@app-core/http/goong/goong.service';
import { IonInput } from '@ionic/angular';
import { NgZone, OnDestroy, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';

import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})


export class Tab1Page implements OnInit{
  apiKey = "moh7iGN6X9muXFV9wcXkwFSi5xj7CeSJYzwBM98Q";
  places:any = [];
  constructor(
    private goongService: GoongService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      const coord = coordinates.coords

      console.log('Current position:', coord);
      this.goongService.goongCurrentPostion(this.apiKey, coord.latitude, coord.longitude).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (error: any) => {
          console.error(error);
        }

      })
    };
    printCurrentPosition();
  }

  changeEvent(res: any) {
    this.goongService.goong(this.apiKey, res.detail.value).subscribe({
      next: (data: any) => {
        // console.log(data);
        this.places = data.predictions;
        
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  moreAboutLoc(res: any){
    
    this.goongService.goongGetId(this.apiKey, res).subscribe({
      next: (data: any) => {
        this.router.navigate(['/tabs/tab2'], { queryParams: { data:JSON.stringify(data)}});
        console.log(data);
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }
}
