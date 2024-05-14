import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Dialog} from "@angular/cdk/dialog";
import {BuyFuturePopupComponent} from "../sell-future-popup/buy-future-popup.component";
import {MyFuture, MyStock} from "../../../models/models";
import {ExchangeService} from "../../../services/exchange.service";
import { parseJson } from '@angular/cli/src/utilities/json-file';
import { SetStockVisibilityComponent } from '../set-stock-visibility/set-stock-visibility.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-stocks',
  templateUrl: './my-stocks.component.html',
  styleUrls: ['./my-stocks.component.css']
})
export class MyStocksComponent implements OnInit{

  myStocks = [] as MyStock[]
  myFutures = [] as MyFuture[]
  myStockColumns = ['myStockId', 'ticker', 'amount', 'opcije'];
  myFutureColumns = ['myFutureId', 'contractName', 'amount', 'opcije'];
  stocksFlag = true
  futuresFlag = false
  role: string = ''
  constructor(private service: ExchangeService, private router: Router, private dialog: MatDialog) {

  }

  switchToStocks(){
    if(this.stocksFlag) return;
    this.stocksFlag = true
    this.futuresFlag = false
    this.service.getMyStocks().subscribe( res => {
      this.myStocks = res
    })

  }
  switchToFutures(){
    if(this.futuresFlag) return;
    this.futuresFlag = true
    this.stocksFlag = false
    this.service.getMyFutures().subscribe( res => {
      this.myFutures = res
    })
  }

  ngOnInit(): void {
    let tk = parseJson(atob(sessionStorage.getItem("token")!.split('.')[1]));
    if("role" in tk){
      this.role = tk.role
    }else{
      this.role = "ROLE_USER"
    }
    this.service.getMyStocks().subscribe( res => {
      this.myStocks = res
      this.myStocks.sort((a, b) => a.myStockId - b.myStockId)
    })
    this.service.getMyFutures().subscribe( res => {
      this.myFutures = res
    })
  }

  sellStock(ticker: string){
    this.router.navigate(['sell-hartije', ticker]);
  }
  //TODO sell future
  sellFuture(id: number){

    this.dialog.open(BuyFuturePopupComponent, {
      data: { selectedFutureId: id}
    });
  }
  setStockOtc(stock: MyStock){
    console.log(stock)
    this.dialog.open(SetStockVisibilityComponent, {
      data: { stock: stock}
    })
  }



}
