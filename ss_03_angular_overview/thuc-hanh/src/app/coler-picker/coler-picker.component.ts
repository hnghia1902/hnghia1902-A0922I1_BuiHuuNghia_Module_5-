import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coler-picker',
  templateUrl: './coler-picker.component.html',
  styleUrls: ['./coler-picker.component.css']
})
export class ColerPickerComponent implements OnInit {

  color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
