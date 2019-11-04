import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgrounduploadComponent } from './backgroundupload.component';

describe('BackgrounduploadComponent', () => {
  let component: BackgrounduploadComponent;
  let fixture: ComponentFixture<BackgrounduploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgrounduploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgrounduploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
