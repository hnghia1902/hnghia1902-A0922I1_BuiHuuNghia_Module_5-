import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeFontSizeComponent } from './change-font-size/change-font-size.component';
import { AbcComponent } from './change-font-size/abc/abc.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ColerPickerComponent } from './coler-picker/coler-picker.component';
import { NavbarComponent } from './ss_04/bai_tap/navbar/navbar.component';
import { FooterComponent } from './ss_04/bai_tap/footer/footer.component';
import { ArticleComponent } from './ss_04/bai_tap/article/article.component';
import { LikeComponent } from './ss_04/bai_tap/like/like.component';
import {CountdownTimerComponent} from './ss_05/countdown-timer/countdown-timer.component';
import { FormDangkyComponent } from './ss_o6/form-dangky/form-dangky.component';

import { TuDienTraCuuComponent } from './ss_07/tu-dien-tra-cuu/tu-dien-tra-cuu.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangeFontSizeComponent,
    AbcComponent,
    CalculatorComponent,
    ColerPickerComponent,
    NavbarComponent,
    FooterComponent,
    ArticleComponent,
    LikeComponent,
    CountdownTimerComponent,
    FormDangkyComponent,

    TuDienTraCuuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
