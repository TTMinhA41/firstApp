import { Component, OnInit } from '@angular/core';
import { GoongService } from 'src/app/@app-core/http/goong/goong.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-finding',
  templateUrl: './finding.page.html',
  styleUrls: ['./finding.page.scss'],
})
export class FindingPage implements OnInit {
  apiKey = "moh7iGN6X9muXFV9wcXkwFSi5xj7CeSJYzwBM98Q";
  places:any = [];

  constructor(
    private goongService: GoongService,
    private router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
  }
  changeValue(res:any){
    const inputValue = res.detail.value;
    
    this.goongService.goong(this.apiKey, inputValue).subscribe({
      next: (data: any) => {
        this.places = data.predictions;
      },
      error: (erorr: any) => {
        console.log(erorr);
      }
    })
  }
  //script a function go to the prev page
  goBack(){
    this._location.back();
  }

}
