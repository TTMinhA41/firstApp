import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  formInfo = new FormGroup({
    phone: new FormControl(''),
    password: new FormControl('')
  })

  submitForm() {
    console.log(this.formInfo.value);
  }
}
