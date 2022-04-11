import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Btc {
  time: {
    updated: string;
  };
  bpi: {
    USD: {
      symbol: string;
      rate_float: number;
    };
    BRL: {
      symbol: string;
      rate_float: number;
    };
  };
}
@Injectable()
export class BitcoinService {
  btcRates: Array<Btc> = [];

  constructor(private http: HttpClient) {}

  updateBitCoinRates() {
    if (this.btcRates.length > 9) {
      this.btcRates = [];
    }
    this.http
      .get<Btc>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json ')
      .subscribe((data) => {
        this.btcRates.push(data);
      });
  }
  intervalRates() {
    this.updateBitCoinRates();
    setInterval(() => {
      this.updateBitCoinRates();
    }, 60000);
  }
}
