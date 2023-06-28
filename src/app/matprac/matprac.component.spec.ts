import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatpracComponent } from './matprac.component';

describe('MatpracComponent', () => {
  let component: MatpracComponent;
  let fixture: ComponentFixture<MatpracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatpracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
