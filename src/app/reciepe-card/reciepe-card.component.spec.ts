import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepeCardComponent } from './reciepe-card.component';

describe('ReciepeCardComponent', () => {
  let component: ReciepeCardComponent;
  let fixture: ComponentFixture<ReciepeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReciepeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciepeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
