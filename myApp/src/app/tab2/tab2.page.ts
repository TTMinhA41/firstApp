import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../@app-core/http/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private authService: AuthService
  ) {}
  formInfo = new FormGroup({
    phone: new FormControl(''),
    password: new FormControl('')
  })

  submitForm() {
    this.authService.login(this.formInfo.value).subscribe({
      next: (data:any) => {
        console.log(data);
      },
      error: (err:any)=>{
        console.log(err);
      }
    })
  }
}
