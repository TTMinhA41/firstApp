import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { flush } from '@angular/core/testing';
import { StyleService } from 'src/app/@app-core/style/style.service';
import { abbreviateNumber } from 'js-abbreviation-number';


@Component({
  selector: 'app-rest-profile',
  templateUrl: './rest-profile.page.html',
  styleUrls: ['./rest-profile.page.scss'],
})
export class RestProfilePage implements OnInit {
  @ViewChild('orderView', { static: true }) orderView!: ElementRef

  orderedPrice: any = {
    "price": 0,
    "facePrice": "",
    "orderCount": 0,
    "faceOrderCount": ""
  }

  numWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  restaurantData: any =
    {
      "id": 1,
      "name": "Gadana - Chân Gà Cay",
      "faces": {
        "avatar": "https://s3-alpha-sig.figma.com/img/1b75/2e41/dd3f8b6a4ea797756b545c4e4e89da7c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QSvWwPbMMTcf58ZU9KLmQYrMc5iCYsB81G9ACsTFREuDtrSrTlhU85Btzvjt3ETnIzVKvgMonijhl0NVnh7ZgDtN81lpbu9t0Acd7OOzGYTZ0zUpdlvrfatlvvK53C1hmQvCZOW0s3X2X3qev4j2OtxAPe4igMncIZv9MGQJL3Lx2mFtdVaWrl4TM5xznwMuiMgQIzgwqZmovD1Oq0Zp9fE9U8EVgADe3ccpuvjyZOxFio4TkRt6o-GufrPzajExO38lmNCwo3Urf5t~0rVdok1RQP-zC49YsHzElTDnjNtmvKa5HCJBaG4~cECnaNsspcnYkVpCZO5V7LMagQUROw__",
        "banner": "https://www.figma.com/file/iZMFufoY7Z5RKvtFnKTRcr/image/1b9a64bcd7e16083af17185de88e722d94ab4104"
      },
      "workingTime": {
        "inDay": {
          "start": "8:00",
          "end": "23:00"
        },
        "inWeek": {
          "start": "T2",
          "end": "CN"
        }
      },
      "rates": {
        "ratePoint": 4.1,
        "rateCount": 50
      },
      "shippingTime": {
        "from": "11",
        "to": "20",
      },
      "foods": [
        {
          "id": 1,
          "face": "",
          "name": "Mực rim mắm",
          "price": 35000,
          "facePrice": this.numWithCommas(35000),
          "sold": 1
        },
        {
          "id": 2,
          "face": "",
          "name": "Thịt xào",
          "price": 35000,
          "facePrice": this.numWithCommas(35000),
          "sold": 1
        },
        {
          "id": 3,
          "face": "",
          "name": "Nem chua rán",
          "price": 35000,
          "facePrice": this.numWithCommas(35000),
          "sold": 1
        },
        {
          "id": 4,
          "face": "",
          "name": "Bánh xèo",
          "price": 35000,
          "facePrice": this.numWithCommas(35000),
          "sold": 1
        }
      ],
      "drinks": [
        {
          "id": 1,
          "face": "",
          "name": "Nước ép trái cây Hiền",
          "price": 35000,
          "facePrice": this.numWithCommas(35000),
          "sold": 1
        },
        {
          "id": 2,
          "face": "",
          "name": "Nước ép trái cây Hiền",
          "price": 35000,
          "facePrice": this.numWithCommas(35000),
          "sold": 1
        },
        {
          "id": 3,
          "face": "",
          "name": "Nước ép trái cây Hiền",
          "price": 35000,
          "facePrice": this.numWithCommas(35000),
          "sold": 1
        },
      ]
    }


  constructor(
    private router: Router,
    private _location: Location,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private styleService: StyleService,
  ) { }

  ngOnInit() {}

  async addFoodAlert(i: any) {
    const alert = await this.alertController.create({
      header: "Xác nhận",
      message: `Bạn có muốn thêm món ${i.name} vào giỏ hàng?`,
      buttons: [
        {
          text: 'Hủy',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Đồng ý',
          handler: async () => {
            const toast = await this.toastCtrl.create({
              message: 'Đã thêm thành công',
              duration: 3000,
              position: 'top',
            });
            toast.present();
            this.didOrder(i.price);
          }
        }
      ],
    });
    await alert.present();    
  }

  async didOrder(price: number){
    this.orderedPrice.price += price;
    this.orderedPrice.facePrice = this.numWithCommas(this.orderedPrice.price)
    this.orderedPrice.orderCount += 1;
    this.orderedPrice.faceOrderCount = abbreviateNumber(this.orderedPrice.orderCount, 1)
  }


  goBack() {
    this._location.back();
  }

}
