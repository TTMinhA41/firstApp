import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../http/auth/auth.service';
import { GoongService } from '../http/goong/goong.service';
import { ModuleTeardownOptions } from '@angular/core/testing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { 
  public static forRoot(): ModuleWithProviders<unknown>{
    return {
      ngModule: CoreModule,
      providers: [AuthService, GoongService]

    }
  }
}
