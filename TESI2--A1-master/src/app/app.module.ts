import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelioWalletService } from './helio-wallet.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HelioWalletComponent } from './helio-wallet/helio-wallet.component';
import { HelioCurrencyComponent } from './helio-currency/helio-currency.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HelioCurrencyComponent,
      },
      {
        path: 'wallet',
        component: HelioWalletComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HelioWalletComponent,
    HelioCurrencyComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HelioWalletService],
})
export class AppModule {}
