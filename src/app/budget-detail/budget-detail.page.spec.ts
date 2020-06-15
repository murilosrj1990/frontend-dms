import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BudgetDetailPage } from './budget-detail.page';

describe('BudgetDetailPage', () => {
  let component: BudgetDetailPage;
  let fixture: ComponentFixture<BudgetDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
