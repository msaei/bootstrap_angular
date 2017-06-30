import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCenterComponent } from './content-center.component';

describe('ContentCenterComponent', () => {
  let component: ContentCenterComponent;
  let fixture: ComponentFixture<ContentCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
