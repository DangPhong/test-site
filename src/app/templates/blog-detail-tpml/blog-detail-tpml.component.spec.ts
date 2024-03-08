import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailTpmlComponent } from './blog-detail-tpml.component';

describe('BlogDetailTpmlComponent', () => {
  let component: BlogDetailTpmlComponent;
  let fixture: ComponentFixture<BlogDetailTpmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDetailTpmlComponent]
    });
    fixture = TestBed.createComponent(BlogDetailTpmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
