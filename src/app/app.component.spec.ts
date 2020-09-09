import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create app component', () => {
    expect(component).toBeTruthy();
  });

  it('should show Home heading', () => {
    const titleElement = element.querySelector('h1');
    fixture.detectChanges();
    expect(titleElement.textContent).toContain('Home');
  });

  it('should show dialog button', () => {
    fixture.detectChanges();
    const titleElement = element.querySelector('button');
    fixture.detectChanges();
    expect(titleElement.textContent).toContain('Open Dialog');
  });

  xit('should call open on button click', () => {
    component.openDialog('id');
    spyOn(component, 'openDialog');
    fixture.detectChanges();
    const titleElement = element.querySelector('button');
    titleElement.click();
    fixture.detectChanges();
    expect(component.openDialog('id')).toHaveBeenCalled();
  });
});

