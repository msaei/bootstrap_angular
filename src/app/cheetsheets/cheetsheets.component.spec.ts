import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheetsheetsComponent } from './cheetsheets.component';

describe('CheetsheetsComponent', () => {
  let component: CheetsheetsComponent;
  let fixture: ComponentFixture<CheetsheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheetsheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheetsheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
