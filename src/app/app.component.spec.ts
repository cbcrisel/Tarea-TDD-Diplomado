import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should calculate factorial of 0', () => {
    const result = app.calcularFactorial(0)
    expect(result).toBe(1);
  });

  it('should calculate factorial of 1', () => {
    const result = app.calcularFactorial(1)
    expect(result).toBe(1);
  });

  it('should calculate factorial of 10', () => {
    const result = app.calcularFactorial(10)
    expect(result).toBe(3628800);
  });

  it('should calculate factorial of 7', () => {
    const result = app.calcularFactorial(7)
    expect(result).toBe(5040);
  });

});
