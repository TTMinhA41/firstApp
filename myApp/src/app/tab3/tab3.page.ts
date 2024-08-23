import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  doWithNum: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.doWithNum = this.formBuilder.group({
      num: ['', [Validators.required, Validators.minLength(10)]],
    })
  }
  findS = new FormGroup({
    xValue: new FormControl(''),
    nValue: new FormControl('')
  })

  removeNegative = new FormGroup({
    arr: new FormControl(''),
  })

  async submitFindS() {
    let x: any = this.findS.get('xValue')?.value;
    let n: any = this.findS.get('nValue')?.value;
    let S = 0;
    for (let i = 1; i <= n; i++) {
      S += i * Math.pow(x, i);
    }
    console.log(S);
    
  }
  async submitNum(){
    if (this.doWithNum.valid){
      let num: any = this.doWithNum.get('num')?.value;
      let numArr = num.toString().split('')
      let maxValue = Math.max(...numArr);
      numArr.sort((a: any, b: any) => a - b);
      let sum = 0;
      for (let i = 0; i < numArr.length; i++) {
        sum += parseInt(numArr[i]);
      }
      let average = sum / numArr.length;
      console.log(`Lớn nhấn là ${maxValue}`);
      console.log(`Sắp xếp: ${numArr}`);
      console.log(`Tổng: ${sum}`);
      console.log(`Trung bình: ${average.toFixed(2)}`);
      
    }
    else{
      console.log('invalid');
    }
  }
  async submitRemoveNega(){
    let arrTypeString: any = this.removeNegative.get('arr')?.value;
    let arr = arrTypeString.split(',');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    let newArr = arr.filter((item: any) => item >= 0);
    console.log(`Tổng ${sum}`);
    console.log(`Mảng mới ${newArr}`);
  }
}
