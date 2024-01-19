import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationCreatorComponent } from './association-creator.component';

describe('AssociationCreatorComponent', () => {
  let component: AssociationCreatorComponent;
  let fixture: ComponentFixture<AssociationCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociationCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
