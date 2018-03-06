/*import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startDate: Date;
  endDate: Date;
  date: Date;
  disabled: boolean;
  @Input() startRangeDate: Date;
  @Input() endRangeDate: Date;

  constructor() {
    this.date = new Date();
    this.startRangeDate = new Date();
    this.endRangeDate = new Date(this.date.setDate( this.date.getDate()));
  }

  formatDate(date: Date): string {
    return date.toLocaleString();
  }

  onSelectStart(startDate: Date) {
    this.endRangeDate = new Date(this.startDate.getDate());
    
    this.endDate = startDate;
   // this.endDate = null;
   // this.endDate = startDate;
    //this.endDate.setMonth(startDate.getMonth());
    //this.endDate.setDate(null);
    
    //this.endDate = null;
    console.log("onSelect: ", startDate);
  }

  onSelectEnd(date: Date) {
    if(this.startDate == null) {
      console.log("Please Select Start Date");
    }
    console.log("onSelect: ", date);
  }


  clearDate() {
    this.date = null;
  }
  setToday() {
    this.date = new Date();
  }
}


*/


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <material-datepicker 
      [(date)]="startDate" (onSelect)="onSelectStart($event)" dateFormat="YYYY-MM-DD" 
      [rangeStart]="startRangeDate">
  </material-datepicker>
  <material-datepicker [disabled] = "start" 
      [(date)]="endDate" (onSelect)="onSelectEnd($event)" dateFormat="YYYY-MM-DD" 
      [rangeStart]="endRangeDate">
  </material-datepicker>`
})
export class AppComponent {
  start: boolean = true;
  startDate: Date;
  endDate: Date;
  date: Date;
  disabled: boolean;
  @Input() startRangeDate: Date;
  @Input() endRangeDate: Date;

  constructor() {
    this.date = new Date();
    this.startRangeDate = new Date(this.date.setDate(this.date.getDate()-1));
    this.endRangeDate = new Date(this.date.setDate( this.date.getDate()));
  }

  formatDate(date: Date): string {
    return date.toLocaleString();
  }

  onSelectStart(startDate: Date) {
    this.endRangeDate = startDate;
    if(this.startDate != null) {
      this.start = false;
    }
    
    this.endDate = null;
  }

  onSelectEnd(endDate: Date) {
    if(this.startDate == null) {
    }
  }
  clearDate() {
    this.date = null;
  }
  setToday() {
    this.date = new Date();
  }
}
