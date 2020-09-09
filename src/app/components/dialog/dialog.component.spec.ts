import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogComponent } from './dialog.component';
import { CommonModule } from '@angular/common';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<DialogComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [],
      declarations: [DialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should show dialog', () => {
    expect(component).toBeTruthy();
  });

  it('should create the dialog', () => {
    const titleElement = element.querySelector('.app-dialog');
    expect(titleElement).toBeDefined();
  });
});
