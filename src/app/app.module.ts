import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DialogModule } from './components/dialog';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, DialogModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
