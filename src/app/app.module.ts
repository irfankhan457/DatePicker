import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { DatepickerModule } from 'angular2-material-datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerModule } from './DatePicker/datepicker.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDatepickerModule,
    FormsModule, 
    ReactiveFormsModule,
    DatepickerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
