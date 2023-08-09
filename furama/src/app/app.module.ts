import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListServiceComponent,
    EditServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
