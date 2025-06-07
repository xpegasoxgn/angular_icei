import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsEjemploComponent } from './rx-js-ejemplo.component';

describe('RxJsEjemploComponent', () => {
  let component: RxJsEjemploComponent;
  let fixture: ComponentFixture<RxJsEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxJsEjemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
