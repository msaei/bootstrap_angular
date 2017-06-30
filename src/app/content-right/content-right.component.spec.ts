import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRightComponent } from './content-right.component';

describe('ContentRightComponent', () => {
  let component: ContentRightComponent;
  let fixture: ComponentFixture<ContentRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
