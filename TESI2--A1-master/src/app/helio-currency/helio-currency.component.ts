import { Component, OnInit } from '@angular/core';
import { HelioWalletService } from '../helio-wallet.service';

@Component({
  selector: 'app-helio-currency',
  templateUrl: './helio-currency.component.html',
  styleUrls: ['./helio-currency.component.css'],
})
export class HelioCurrencyComponent implements OnInit {
  constructor(public walletService: HelioWalletService) {}

  ngOnInit() {}
}
