import { Component, OnInit } from '@angular/core';
import { DialogService } from './components/dialog';

@Component({ selector: 'app', templateUrl: 'app.component.html' })

export class AppComponent implements OnInit  {
  public dialogTitle: string;
  public dialogContent: string;

  constructor(private modalService: DialogService) {}

  ngOnInit(): void {
    this.dialogTitle = 'My awesome dialog!';
    this.dialogContent = 'My content in my awseome dialog...';
  }

  openDialog(id: string): void {
    this.modalService.open(id);
  }

  closeDialog(id: string): void {
    this.modalService.close(id);
  }
}
