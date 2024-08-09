import { Component, input } from '@angular/core';
import { GoongService } from '../@app-core/http/goong/goong.service';
import { IonInput } from '@ionic/angular';
import { NgZone, OnDestroy, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})


export class Tab1Page implements OnInit{
  apiKey = "moh7iGN6X9muXFV9wcXkwFSi5xj7CeSJYzwBM98Q";
  places:any = [];
  constructor(
    private goongService: GoongService
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
        console.log(data.predictions[0].description);
        this.places = data.predictions;
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }
}
