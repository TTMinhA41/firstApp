import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-rest-profile',
  templateUrl: './rest-profile.page.html',
  styleUrls: ['./rest-profile.page.scss'],
})
export class RestProfilePage implements OnInit {

  numWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  restaurantData: any =
    {
      "id": 1,
      "name": "Gadana - Chân Gà Cay",
      "faces": {
        "avatar": "https://s3-alpha-sig.figma.com/img/1b75/2e41/dd3f8b6a4ea797756b545c4e4e89da7c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IO58waz5-FsXb89jnHtFsXJKUFwwUkmq9NaKO2FlwibXthHuT4hERlhduOVN7J8kAmuk1kdQR1UX6guiXWjjz8PBzjriqlu7ifgRSlNYKghHWI8YGFHsA8MZwIuxoMXrWAyj6sPCOdvdT2Qluyb4SD-RdWXnJoJ8vKBByNwKL-LIbyDL9U7zA7wognroyZknYr9RddnBDgoqwMrsMbVrSmcbgoPDdZ80WJ3yCNaGJGc4k3syRCSmlA9JiqAuHOlIAGB-aWpL-pJb4PCvjPr3q71JsZXJGrNDb1pnnETD8Fc~1QxGRw6ct1FIiU3mg2l5VHO6Xnn5MgnAtRPw6Wil3Q__",
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
    private toastCtrl: ToastController
  ) { }
  async addFoodAlert(index: any) {
    const alert = await this.alertController.create({
      header: "Xác nhận",
      message: `Bạn có muốn thêm món ${index} vào giỏ hàng?`,
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
          }
        }
      ],
    });
    await alert.present();
  }
  

  ngOnInit() { }

  goBack() {
    this._location.back();
  }

}
