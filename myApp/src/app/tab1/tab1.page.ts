import { Component, input } from '@angular/core';
import { GoongService } from '../@app-core/http/goong/goong.service';
import { IonInput } from '@ionic/angular';
import { NgZone, OnDestroy, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';

import { register } from 'swiper/element';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})


export class Tab1Page implements OnInit{
  apiKey = "moh7iGN6X9muXFV9wcXkwFSi5xj7CeSJYzwBM98Q";
  places:any = [];
  shippingLoc:any = '';
  constructor(
    private goongService: GoongService,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) { }
  
  ngOnInit(): void {
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      const coord = coordinates.coords;

      const loading = await this.loadingCtrl.create({
        message: 'Loading',
        spinner: 'circles',
        duration: 3000,
      });
      await loading.present();

      this.goongService.goongCurrentPostion(this.apiKey, coord.latitude, coord.longitude).subscribe({
        next: (data: any) => {
          console.log(data);
          this.shippingLoc = data.results[0].compound.province;
          loading.dismiss();
        },
        error: (error: any) => {
          console.error(error);
        }

      })
    };
    printCurrentPosition();
  }

  goFind(){
    this.router.navigate(['/tabs/tab1/finding']);
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
  goRest(){
    this.router.navigate(['/tabs/tab1/rest-profile']);
  }
}
