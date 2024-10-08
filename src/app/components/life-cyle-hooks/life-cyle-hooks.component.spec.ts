import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCyleHooksComponent } from './life-cyle-hooks.component';

describe('LifeCyleHooksComponent', () => {
  let component: LifeCyleHooksComponent;
  let fixture: ComponentFixture<LifeCyleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCyleHooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCyleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
