import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubepostComponent } from './youtubepost.component';

describe('YoutubepostComponent', () => {
  let component: YoutubepostComponent;
  let fixture: ComponentFixture<YoutubepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
