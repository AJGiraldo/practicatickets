import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChairComponent } from './chair/chair.component';
import { GeneralComponent } from './general/general.component';
import { PalletComponent } from './pallet/pallet.component';

@NgModule({
  declarations: [
    AppComponent,
    ChairComponent,
    GeneralComponent,
    PalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
