import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostloggedinComponent } from './postloggedin.component';

describe('PostloggedinComponent', () => {
  let component: PostloggedinComponent;
  let fixture: ComponentFixture<PostloggedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostloggedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostloggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
