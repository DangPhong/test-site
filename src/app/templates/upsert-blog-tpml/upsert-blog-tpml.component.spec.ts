import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertBlogTpmlComponent } from './upsert-blog-tpml.component';

describe('UpsertBlogTpmlComponent', () => {
  let component: UpsertBlogTpmlComponent;
  let fixture: ComponentFixture<UpsertBlogTpmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpsertBlogTpmlComponent]
    });
    fixture = TestBed.createComponent(UpsertBlogTpmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
