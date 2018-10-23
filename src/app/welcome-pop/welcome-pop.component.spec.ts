import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePopComponent } from './welcome-pop.component';

describe('WelcomePopComponent', () => {
  let component: WelcomePopComponent;
  let fixture: ComponentFixture<WelcomePopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
