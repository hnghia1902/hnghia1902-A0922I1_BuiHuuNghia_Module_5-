import { Component, OnInit } from '@angular/core';
import {TuDienService} from './tu-dien.service';

@Component({
  selector: 'app-tu-dien-tra-cuu',
  templateUrl: './tu-dien-tra-cuu.component.html',
  styleUrls: ['./tu-dien-tra-cuu.component.css']
})
export class TuDienTraCuuComponent implements OnInit {

  searchTerm = '';
  meanings: string[] = [];

  constructor(private tuDienService: TuDienService) {}

  search() {
    if (this.searchTerm.trim() !== '') {
      this.meanings = this.tuDienService.translate(this.searchTerm);
    } else {
      this.meanings = [];
    }
  }

  ngOnInit(): void {
  }
}
