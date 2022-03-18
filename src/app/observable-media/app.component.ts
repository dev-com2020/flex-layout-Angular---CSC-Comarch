import {Component} from '@angular/core';
import {ObservableMedia} from '@angular/flex-layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `<h3>Zaobserwuj w konsoli komunikat o aktywowaniu wartości progowej.</h3>
  <span *ngIf="showExtras$ | async">Pokazuje dodatkowe informacje na średnich ekranach</span><br/>
  <span *ngIf="this.media.isActive('md')">Pokazuje dodatkowe informacje na średnich ekranach za pomocą isActive</span>

  `
})
export class AppComponent {
  showExtras$: Observable<boolean>;

  constructor(public media: ObservableMedia) {
    this.showExtras$ = this.media.asObservable()
      .pipe(map(mediaChange => {
           console.log(mediaChange);
           return mediaChange.mqAlias==='md'? true:false;
          })
      );
  }
}

/*
// Uproszczona wersja, która używa API isActive()
import { Component } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  template: `<h3>Użycie API ObservableMedia.isActive()</h3>
  <span *ngIf="this.media.isActive('md')">Pokazuje dodatkowe informacje na średnich ekranach</span>
  `
})
export class AppComponent {
  constructor(public media: ObservableMedia) {}
}*/
