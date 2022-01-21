import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiRequestComponent } from './core/api-request/api-request.component';
import { CssGridComponent } from './core/css-grid/css-grid.component';

@NgModule({
  declarations: [AppComponent, ApiRequestComponent, CssGridComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
