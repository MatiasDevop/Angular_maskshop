import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasktypeComponent } from './masktype.component';

describe('MasktypeComponent', () => {
  let component: MasktypeComponent;
  let fixture: ComponentFixture<MasktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
