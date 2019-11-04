import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpicuploadComponent } from './postpicupload.component';

describe('PostpicuploadComponent', () => {
  let component: PostpicuploadComponent;
  let fixture: ComponentFixture<PostpicuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpicuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpicuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
