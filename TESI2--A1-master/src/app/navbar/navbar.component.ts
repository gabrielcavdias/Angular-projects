import { Component, OnInit } from '@angular/core';
import { HelioWalletService } from '../helio-wallet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public walletService: HelioWalletService) {}

  ngOnInit() {
    this.walletService.updateBRLbtc();
    this.walletService.begin();
  }
}
