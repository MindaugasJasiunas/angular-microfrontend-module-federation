import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomecompComponent } from './somecomp.component';

describe('SomecompComponent', () => {
  let component: SomecompComponent;
  let fixture: ComponentFixture<SomecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
