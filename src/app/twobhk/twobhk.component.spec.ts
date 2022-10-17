import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobhkComponent } from './twobhk.component';

describe('TwobhkComponent', () => {
  let component: TwobhkComponent;
  let fixture: ComponentFixture<TwobhkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwobhkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwobhkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
