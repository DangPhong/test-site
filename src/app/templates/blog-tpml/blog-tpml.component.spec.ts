import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTpmlComponent } from './blog-tpml.component';

describe('BlogTpmlComponent', () => {
  let component: BlogTpmlComponent;
  let fixture: ComponentFixture<BlogTpmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogTpmlComponent],
    });
    fixture = TestBed.createComponent(BlogTpmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
