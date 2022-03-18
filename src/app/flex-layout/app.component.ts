import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
  .parent {height: 100px}
  .left {background-color: cyan;}
  .right {background-color: red;}
  `],
  
  template:`
  <!-- <div class="parent" fxLayout="row" fxLayout.sm="column" fxLayout.xs="column"> -->
  <div class="parent" fxLayout="row" fxLayout.lt-md="column">
  <div fxFlex="30%" class="left">LEWY</div>
  <div fxFlex="70%" class="right">PRAWY</div>
  </div>
  <!-- <div class="parent" fxLayout="column">
  <div fxFlex="30%" class="left">LEWY</div>
  <div fxFlex="70%" class="right">PRAWY</div>
  </div> -->
  `
})
export class AppComponent {}
