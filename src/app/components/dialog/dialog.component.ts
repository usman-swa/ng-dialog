﻿import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class DialogComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: DialogService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      return;
    }
    document.body.appendChild(this.element);
    this.element.addEventListener('click', (el) => {
      if (el.target.className === 'app-dialog') {
        this.close();
      }
    });
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  public open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('app-dialog-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('app-dialog-open');
  }
}
