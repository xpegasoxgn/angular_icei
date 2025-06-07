import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEjemploComponent } from './rxjs-ejemplo.component';

describe('RxjsEjemploComponent', () => {
  let component: RxjsEjemploComponent;
  let fixture: ComponentFixture<RxjsEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsEjemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
