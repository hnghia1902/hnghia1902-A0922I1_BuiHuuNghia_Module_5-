import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeFontSizeComponent } from './change-font-size/change-font-size.component';
import { AbcComponent } from './change-font-size/abc/abc.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import { ColerPickerComponent } from './coler-picker/coler-picker.component';
import { NavbarComponent } from './ss_04/bai_tap/navbar/navbar.component';
import { FooterComponent } from './ss_04/bai_tap/footer/footer.component';
import { ArticleComponent } from './ss_04/bai_tap/article/article.component';
import { LikeComponent } from './ss_04/bai_tap/like/like.component';
import {CountdownTimerComponent} from './ss_05/countdown-timer/countdown-timer.component';


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
