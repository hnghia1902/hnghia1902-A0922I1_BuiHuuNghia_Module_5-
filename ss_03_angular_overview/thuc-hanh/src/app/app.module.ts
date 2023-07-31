import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeFontSizeComponent } from './change-font-size/change-font-size.component';
import { AbcComponent } from './change-font-size/abc/abc.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import { ColerPickerComponent } from './coler-picker/coler-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeFontSizeComponent,
    AbcComponent,
    CalculatorComponent,
    ColerPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
