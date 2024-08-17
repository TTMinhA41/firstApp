import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestProfilePage } from './rest-profile.page';

describe('RestProfilePage', () => {
  let component: RestProfilePage;
  let fixture: ComponentFixture<RestProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
