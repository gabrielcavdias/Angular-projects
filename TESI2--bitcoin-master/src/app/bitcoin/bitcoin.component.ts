import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css'],
})
export class BitcoinComponent implements OnInit {
  constructor(public btcServ: BitcoinService) {}
  lstValue = 0;
  changeLst(n) {
    this.lstValue = Number(n);
  }
  ngOnInit() {
    this.btcServ.intervalRates();
  }
}
