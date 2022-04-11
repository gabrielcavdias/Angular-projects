import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export function regraDeTres(x: number, y: number, z: number) {
  return (y * z) / x;
}
interface brlBTC {
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
interface eurBTC {
  time: {
    updated: string;
  };
  bpi: {
    EUR: {
      symbol: string;
      rate_float: number;
    };
  };
}
interface Cotacao {
  usd: number;
  btc: number;
  eur: number;
}
@Injectable()
export class HelioWalletService {
  constructor(private http: HttpClient) {}
  BTCeur: Array<eurBTC> = [];
  BTCbrl: Array<brlBTC> = [];
  Cotacoes: Array<Cotacao> = [];
  latestCotacao: Cotacao;
  saldoBitcoin: number = 0;
  begin() {
    setInterval(() => {
      this.updateBRLbtc();
    }, 60000);
  }
  updateBRLbtc() {
    this.http
      .get<brlBTC>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.BTCbrl.push(data);
        this.updateEURbtc();
      });
  }
  updateEURbtc() {
    this.http
      .get<eurBTC>('https://api.coindesk.com/v1/bpi/currentprice.json')
      .subscribe((data) => {
        this.BTCeur.push(data);
        this.updateCotacao();
      });
  }
  updateCotacao() {
    let usd = regraDeTres(
      this.BTCbrl[this.BTCbrl.length - 1].bpi.USD.rate_float,
      this.BTCbrl[this.BTCbrl.length - 1].bpi.BRL.rate_float,
      1
    );
    let eur = regraDeTres(
      this.BTCeur[this.BTCeur.length - 1].bpi.EUR.rate_float,
      this.BTCbrl[this.BTCbrl.length - 1].bpi.BRL.rate_float,
      1
    );
    if (this.Cotacoes.length === 0) {
      this.latestCotacao = {
        usd: usd,
        btc: this.BTCbrl[this.BTCbrl.length - 1].bpi.BRL.rate_float,
        eur: eur,
      };
    } else {
      this.latestCotacao = {
        ...this.Cotacoes[this.Cotacoes.length - 1],
      };
    }
    this.Cotacoes.push({
      usd: usd,
      btc: this.BTCbrl[this.BTCbrl.length - 1].bpi.BRL.rate_float,
      eur: eur,
    });
  }
}
