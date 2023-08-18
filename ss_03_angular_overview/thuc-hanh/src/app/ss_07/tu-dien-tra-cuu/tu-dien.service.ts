import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TuDienService {

  private dictionary: { [word: string]: string[] } = {
    fish: ['con cá'],
    leon: ['con sư tử'],
    hola: ['xin chào']
  };

  constructor() { }

  translate(transTerm: string): string[] {
    transTerm = transTerm.toLowerCase();
    return this.dictionary[transTerm] || [];
  }
}
