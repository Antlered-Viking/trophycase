import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophycardComponent } from './trophycard.component';

describe('TrophycardComponent', () => {
  let component: TrophycardComponent;
  let fixture: ComponentFixture<TrophycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrophycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
