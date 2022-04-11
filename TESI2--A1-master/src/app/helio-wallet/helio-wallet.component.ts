import { Component, OnInit } from '@angular/core';
import { HelioWalletService } from '../helio-wallet.service';
import { regraDeTres } from '../helio-wallet.service';
@Component({
  selector: 'app-helio-wallet',
  templateUrl: './helio-wallet.component.html',
  styleUrls: ['./helio-wallet.component.css'],
})
export class HelioWalletComponent implements OnInit {
  constructor(public walletService: HelioWalletService) {}
  inputModel: number = 0;

  handleSaldo(sld: number) {
    this.walletService.saldoBitcoin += regraDeTres(
      this.walletService.Cotacoes[this.walletService.Cotacoes.length - 1].btc,
      1,
      sld
    );
    this.inputModel = 0;
  }
  ngOnInit() {}
}
