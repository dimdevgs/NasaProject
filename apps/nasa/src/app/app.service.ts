import { Injectable } from '@angular/core';

export class List {
  id: number | undefined;
  text: string | undefined;
  icon: string | undefined;
  path: string | undefined;
}

let navigation: List[] = [
  { id: 1, text: "APOD", icon: "home", path: "apod" },
  { id: 2, text: "EONET", icon: "globe", path: "eonet" },
  { id: 3, text: "DONKI", icon: "warning", path: "donki" }
];

// let text = '<h1>Here is the text</h1>'

@Injectable()
export class AppService {
  getNavigationList(): List[] {
    return navigation;
  }

  // getContent(): string {
  //   return text;
  // }
}
